import xml.etree.ElementTree as ET
import os
import re
import requests
from urllib.parse import urlparse
from datetime import datetime

XML_FILE = '../buttonwoodhillresidentsassociation.WordPress.2026-04-08.xml'
POSTS_DIR = 'content/posts'
IMAGES_DIR = 'public/images/posts'
LOG_FILE = 'migration_log.txt'

# Namespaces
NS = {
    'wp': 'http://wordpress.org/export/1.2/',
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'excerpt': 'http://wordpress.org/export/1.2/excerpt/'
}

def download_image(url):
    if not url:
        return None
    
    parsed_url = urlparse(url)
    filename = os.path.basename(parsed_url.path)
    if not filename:
        return None
        
    local_path = os.path.join(IMAGES_DIR, filename)
    
    # Skip if exists
    if os.path.exists(local_path):
        return f"/images/posts/{filename}"
        
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(url, timeout=10, stream=True, headers=headers)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            return f"/images/posts/{filename}"
        else:
            print(f"Failed to download {url}: Status {response.status_code}")
            return None
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return None

def get_category_by_title(title):
    t = title.lower()
    if any(keyword in t for keyword in ['buttonwood', 'bhra', 'picnic', 'park', 'school', 'tcdsb', 'silver creek']):
        return "Buttonwood Hill Property"
    if any(keyword in t for keyword in ['eglinton', 'lrt', 'crosstown', 'ecwe']):
        return "Eglinton West LRT"
    if 'humbertown' in t:
        return "Humbertown Plaza"
    if 'richview' in t:
        return "Richview Square"
    if 'la rose' in t:
        return "La Rose Apartments"
    if 'six points' in t:
        return "Other Developments"
    return "Community News"

def migrate():
    if not os.path.exists(POSTS_DIR):
        os.makedirs(POSTS_DIR)
    if not os.path.exists(IMAGES_DIR):
        os.makedirs(IMAGES_DIR)
        
    tree = ET.parse(XML_FILE)
    root = tree.getroot()
    channel = root.find('channel')
    
    summary = {
        'total_posts': 0,
        'images_downloaded': 0,
        'images_failed': 0,
        'posts_no_image': 0,
        'posts_with_pdf': 0,
        'no_image_list': []
    }
    
    log_file = open(LOG_FILE, 'w')
    
    for item in channel.findall('item'):
        post_type_elem = item.find('wp:post_type', NS)
        status_elem = item.find('wp:status', NS)
        
        if post_type_elem is None or status_elem is None:
            continue
            
        post_type = post_type_elem.text
        status = status_elem.text
        
        if post_type != 'post' or status != 'publish':
            continue

        slug_elem = item.find('wp:post_name', NS)
        slug = slug_elem.text if slug_elem is not None else f"post-{summary['total_posts'] + 1}"

        # Skip specifically excluded posts
        if slug in ['buttonwood-park-survey', 'bhra-photos-picnic-in-the-park-2025']:
            continue
            
        summary['total_posts'] += 1
        
        title_elem = item.find('title')
        title = title_elem.text if title_elem is not None and title_elem.text else "Untitled"

        
        date_elem = item.find('wp:post_date', NS)
        date = date_elem.text if date_elem is not None else "2000-01-01 00:00:00"
        
        content_elem = item.find('content:encoded', NS)
        content = content_elem.text if content_elem is not None and content_elem.text else ""
        
        # Extract divi_title
        divi_title_match = re.search(r'\[et_pb_fullwidth_header title="([^"]+)"', content)
        divi_title = divi_title_match.group(1) if divi_title_match else None
        
        # Determine final title
        final_title = title
        if divi_title and divi_title != title and len(divi_title) > 3:
            final_title = divi_title
            
        # Set category based on title
        category = get_category_by_title(final_title)

            
        # Extract Images
        image_urls = re.findall(r'src="(https://buttonwoodhillresidents.com/wp-content/uploads/[^"]+\.(?:jpg|jpeg|png|gif|webp))"', content)
        
        local_images = []
        fallback_url = ""
        for url in image_urls:
            local_path = download_image(url)
            if local_path:
                local_images.append(local_path)
                summary['images_downloaded'] += 1
            else:
                summary['images_failed'] += 1
                if not fallback_url:
                    fallback_url = url
                    
        # Extract PDF and Links
        pdf_url = ""
        external_link = ""
        
        button_matches = re.findall(r'button_url="([^"]+)"', content)
        for b_url in button_matches:
            if b_url.endswith('.pdf'):
                pdf_url = b_url
                summary['posts_with_pdf'] += 1
            elif b_url.startswith('http') and 'buttonwoodhillresidents.com' not in b_url:
                external_link = b_url
        
        # Build Frontmatter
        has_image = len(local_images) > 0
        if not has_image:
            summary['posts_no_image'] += 1
            summary['no_image_list'].append(slug)
            
        md = "---\n"
        md += f'title: "{final_title}"\n'
        md += f'date: "{date}"\n'
        md += f'category: "{category}"\n'
        
        if has_image:
            md += f'image: "{local_images[0]}"\n'
            for i, img in enumerate(local_images[1:], 2):
                md += f'image_{i}: "{img}"\n'
        else:
            md += 'image: ""\n'
            
        md += f'image_url_fallback: "{fallback_url}"\n'
        md += f'pdf_url: "{pdf_url}"\n'
        md += f'external_link: "{external_link}"\n'
        md += f'has_image: {"true" if has_image else "false"}\n'
        md += "---\n"
        
        filepath = os.path.join(POSTS_DIR, f"{slug}.md")
        with open(filepath, 'w') as f:
            f.write(md)
            
        log_file.write(f"Processed: {slug} | Images: {len(local_images)} | PDF: {'Yes' if pdf_url else 'No'}\n")

    log_file.write("\n--- SUMMARY ---\n")
    log_file.write(f"Total Posts: {summary['total_posts']}\n")
    log_file.write(f"Images Downloaded: {summary['images_downloaded']}\n")
    log_file.write(f"Images Failed: {summary['images_failed']}\n")
    log_file.write(f"Posts with no image: {summary['posts_no_image']}\n")
    log_file.write(f"Posts with PDF: {summary['posts_with_pdf']}\n")
    log_file.close()
    
    print("\n--- MIGRATION COMPLETE ---")
    print(f"Total Posts: {summary['total_posts']}")
    print(f"Images Downloaded: {summary['images_downloaded']}")
    print(f"Images Failed: {summary['images_failed']}")
    print(f"Posts with no image: {summary['posts_no_image']}")
    print(f"Posts with PDF: {summary['posts_with_pdf']}")
    print("\nPosts with no images:")
    for s in summary['no_image_list']:
        print(f" - {s}")
    print(f"\nDetailed log saved to {LOG_FILE}\n")

if __name__ == "__main__":
    migrate()
