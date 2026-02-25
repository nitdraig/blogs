<p align="center">
  <a href="https://blog.agustin.top/">
    <img src="https://res.cloudinary.com/draig/image/upload/v1721879796/portolio-personal/icqgvg2j7br8opbasotz.png" alt="Blog Logo" width="200" height="200">
  </a>
</p>
<h3 align="center">Agustin's Perceptions | Blog</h3>

<p align="center">
  A simple blog about my IT experience and career (EN / ES)
  <br>
  <br>
  <a href="https://github.com/nitdraig/blogs/issues">Report bug</a>
  ·
  <a href="https://github.com/nitdraig/blogs/issues">Request feature</a>
  ·
  <a href="https://agustin.top/">Creator Portfolio</a>
</p>

# Agustin's Perceptions

## Introduction

This is a blog that seeks to centralize information, experiences, perceptions, reflections and personal thoughts in a professional way and focused on the IT world. **Single project** with **English and Spanish**; language is switched via a button in the navbar (cookie-based, same URL for both languages).

## Stack

Next.js (App Router), Tailwind, TypeScript, Markdown. Category filters for posts.

## Project structure

- **Single app** in the repo root: `app/`, `lib/`, `messages/`, `blogposts/`
- **Posts by language:** `blogposts/en/*.md` and `blogposts/es/*.md`
- **Translations:** `messages/en.json` and `messages/es.json`
- **Locale:** Stored in cookie `locale`; read on the server for content and metadata

## Run

```bash
npm install
npm run dev
```

Optional: set `NEXT_PUBLIC_BLOG_URL` (e.g. `https://blog.agustin.top`) for canonical URLs and sharing.

## Legacy folders

The `blog-en/` and `blog-es/` folders are the previous separate deploys. They are excluded from the build; you can remove them once the new single deploy is live.
