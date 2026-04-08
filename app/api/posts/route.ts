import { getSortedPostsData } from "@/lib/markdown";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getSortedPostsData();
  return NextResponse.json(posts);
}
