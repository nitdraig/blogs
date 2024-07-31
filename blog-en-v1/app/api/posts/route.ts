import { getSortedPostsData } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allPostsData = getSortedPostsData();
    return NextResponse.json(allPostsData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load posts data" },
      { status: 500 }
    );
  }
}
