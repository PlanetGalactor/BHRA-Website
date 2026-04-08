import xml.etree.ElementTree as ET
import os
import re
from datetime import datetime

def parse_xml():
    xml_file = "../buttonwoodhillresidentsassociation.WordPress.2026-04-08.xml"
    
    # namespaces
    ns = {
        'wp': 'http://wordpress.org/export/1.2/',
        'content': 'http://purl.org/rss/1.0/modules/content/',
        'dc': 'http://purl.org/dc/elements/1.1/',
        'wfw': 'http://wellformedweb.org/CommentAPI/'
    }
    
    tree = ET.parse(xml_file)
    root = tree.getroot()
    channel = root.find('channel')
    
    os.makedirs('content/posts', exist_ok=True)
    os.makedirs('content/pages', exist_ok=True)
    
    for item in channel.findall('item'):
        post_type = item.find('wp:post_type', ns)
        status = item.find('wp:status', ns)
        
        if post_type is None or status is None:
            continue
            
        ptype = post_type.text
        pstatus = status.text
        
        if pstatus != 'publish':
            continue
            
        if ptype not in ['post', 'page']:
            continue
            
        title = item.find('title').text or 'Untitled'
        
        # Make slug safe
        post_name = item.find('wp:post_name', ns).text
        if not post_name:
            post_name = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')
            
        content_elem = item.find('content:encoded', ns)
        content = content_elem.text if content_elem is not None else ''
        if not content:
            content = ''
            
        # Strip shortcodes: [shortcode attr="val"]...[/shortcode] or self-closing
        # Simplistic regex to remove block-level shortcodes that might be from Divi
        content = re.sub(r'\[/?et_pb_[^\]]+\]', '', content)
        # Strip all other [...] that match typical divi/wp shortcodes but leave standard markdown alone...
        # Actually it's safer to just strip [et_pb_* ] completely. Divi uses [et_pb_section ...]
        
        # Basic cleanup: remove leftover shortcodes
        content = re.sub(r'\[/?(et_pb_[^\]]+|divi_[^\]]+)\]', '', content)
        
        # date
        date_elem = item.find('wp:post_date', ns)
        date_str = date_elem.text if date_elem is not None else '2000-01-01 00:00:00'
        
        # categories for post
        categories = []
        if ptype == 'post':
            for cat in item.findall('category'):
                domain = cat.attrib.get('domain')
                if domain == 'category':
                    categories.append(cat.text)
        
        cat_str = categories[0] if categories else 'News'
        
        # excerpt
        excerpt_elem = item.find('wp:post_excerpt', ns)
        excerpt = excerpt_elem.text if excerpt_elem is not None else ''
        if not excerpt:
            # Generate excerpt from content
            clean_text = re.sub(r'<[^>]+>', '', content)
            clean_text = re.sub(r'\s+', ' ', clean_text)
            excerpt = clean_text[:150] + '...' if len(clean_text) > 150 else clean_text
            
        # build markdown
        clean_title = title.replace('"', '\\"') if title else "Untitled"
        clean_excerpt = excerpt.replace('"', '\\"') if excerpt else ""
        
        md = "---\n"
        md += f"title: \"{clean_title}\"\n"
        md += f"date: \"{date_str}\"\n"
        if ptype == 'post':
            md += f"category: \"{cat_str}\"\n"
        md += f"excerpt: \"{clean_excerpt}\"\n"
        md += "---\n\n"
        md += content
        
        folder = 'content/posts' if ptype == 'post' else 'content/pages'
        filepath = os.path.join(folder, f"{post_name}.md")
        
        with open(filepath, 'w') as f:
            f.write(md)
            
if __name__ == '__main__':
    parse_xml()
