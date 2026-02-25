import { getSortedPostsData, getPostExcerptAndReadTime } from "@/lib/posts";
import { getLocale } from "@/lib/locale";
import { NextRequest, NextResponse } from "next/server";
import type { Locale } from "@/lib/locale";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: CORS_HEADERS });
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const localeParam = searchParams.get("locale") ?? searchParams.get("lang");
    const locale: Locale =
      localeParam === "es" || localeParam === "en" ? localeParam : await getLocale();

    const posts = getSortedPostsData(locale);
    const baseUrl =
      process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.agustin.top";

    const payload = posts.map((post) => {
      const { excerpt, readTime } = getPostExcerptAndReadTime(post.id, locale);
      return {
        id: post.id,
        title: post.title,
        excerpt,
        category: post.category,
        readTime,
        image: post.image ?? null,
        date: post.date,
        url: `${baseUrl}/posts/${post.id}`,
      };
    });

    return NextResponse.json(payload, { headers: CORS_HEADERS });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to load posts data" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
