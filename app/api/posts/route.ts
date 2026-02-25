import { getSortedPostsData } from "@/lib/posts";
import { getLocale } from "@/lib/locale";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const locale = await getLocale();
    const allPostsData = getSortedPostsData(locale);
    return NextResponse.json(allPostsData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load posts data" },
      { status: 500 }
    );
  }
}
