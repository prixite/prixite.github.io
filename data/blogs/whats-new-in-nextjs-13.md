---
title: "What's new in next.js 13 - A Developer's Guide"
date: 'June 09, 2023'
excerpt: 'Next.js is a popular open-source framework for building modern web applications using React.'
cover_image: '/images/posts/whatsnewinnextjs/nextjs13-cover.png'
author: 'Umair Jameel'
---

#### What is Next.js?

[Next.js](https://nextjs.org/) is a popular open-source framework for building web applications with React. Next.js provides a streamlined development experience by offering server-side rendering (SSR), static site generation (SSG), and client-side rendering capabilities.

With Next.js, developers can build modern, dynamic web applications that are optimized for performance and SEO. It simplifies the process of creating server-rendered React applications by providing a structured setup and routing system.

<br>
#### What's new in Next.js 13?
Next.js 13 comes with new directory structure for routes and apis along with some new buildin layout and loading files.

Use this command to create a new next.js app with new version: <b>npx create-next-app@latest</b>

During installation, it will show you following prompts:

    > What is your project named? my-app
    > Would you like to use TypeScript with this project? No / Yes
    > Would you like to use ESLint with this project? No / Yes
    > Would you like to use Tailwind CSS with this project? No / Yes
    > Would you like to use `src/` directory with this project? No / Yes
    > Use App Router (recommended)? No / Yes
    > Would you like to customize the default import alias? No / Yes

Next.js now ships with <b>TypeScript, ESLint, and Tailwind CSS</b> configuration by default.

These are the major upgrades added in this new version are these:

1.  Typescript by Default
2.  /app Directory for File-Based Routing
3.  React Server Components
4.  Async Components & Data Fetching
5.  Loading and Streaming
6.  Turbopack
7.  Upgrades in next/image, next/link, next/font
8.  MetaData

<br>
##### 1. Typescript by Default
“Next.js provides a TypeScript-first development experience for building your React application.

It comes with built-in TypeScript support for automatically installing the necessary packages and configuring the proper settings.
As well as a TypeScript Plugin for your editor.”

Read More: [Typescript in Next.js 13+](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

<br>
##### 2. /app Directory for File-Based Routing
Next.js 13 includes updated file routing with the new directory. The app directory introduces a new layout, loading structure as well as several new features and improvements.

The directory structure has introduces few changes due to the new routing mechanism. Each path in the route has a dedicated directory with a page.tsx file that serves as the content entry point in Next.js 13.

We can also add <b>layout.tsx</b>, <b>error.tsx</b> and <b>loading.tsx</b> files inside each folder within /app directory.

<img src="/images/posts/whatsnewinnextjs/app-directory.png" alt="image-120"/>

Here, we can create 3 more files (layout.tsx, error.tsx and loading.tsx) parallel to each page.tsx file.

- <b>layout.tsx</b> works as a layout components of that particular route and take all of its child components as props.
- <b>error.tsx</b> triggers automatically when there is any error in its page.tsx component or any of its child components.
- <b>loading.tsx</b> it works as a loading screen for the whole layout of this folder.

Read More: [Pages and Layouts in Next.js 13+](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

<br>
##### 3. Server Components
Server components run on the server side for faster delivery, a smaller JavaScript bundle, and less expensive client-side rendering.

By default, all components created are server components. Use <b>use Client</b> at top of file to make it client component. Combining server and client components allows you to use server components for fast loaded, non-interactive parts of your programme while using client components for interaction, browser APIs, and other features.

    'use client' // Write it at top of file, when you want it to be a client component.
    export default function Home() {
    return (
        <div>
            <p>
            Without 'use client' at top, This would be the Server component by default.
            </p>
        </div>
        )
    }

Usecases of using server components vs client components:
![Server components in next.js 13+](/images/posts/whatsnewinnextjs/server-components.png#image-70)

Read More: [Server components in Next.js 13+](https://nextjs.org/docs/getting-started/react-essentials)

<br>
##### 4. Async Components & Data Fetching
The Next.js 13+ App Router allows you to fetch data directly in your React components by marking the function as async and using await

    async function fetchData() {
        const res = await fetch('https://api.website.com/...');
        return res.json();
    }
    export default async function Home() {
        const data = await fetchData();
        return <main></main>;
    }

Next.js 13+ provides a second params to fetch function to decide whether we want to fetch data at build time or at run time from server.

    //Default, Similar to 'getStaticProps' of previous versions.
    fetch(API_URL, { cache: 'force-cache' })

    // It re-renders already built files after every 10 seconds.
    fetch(API_URL, { next: { revalidate: 10 } });

    // Similar to 'getServerSideProps' of previous versions.
    fetch(API_URL, { cache: 'no-store' })

Read More: [Async Components & Data Fetching in Next.js 13+](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)

<br>
##### 5. Loading and Streaming
he special file <b>loading.tsx</b> helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads, the new content is automatically swapped in once rendering is complete.

    export default function Loading() {
        // You can add any UI inside Loading, including a Skeleton.
        return <LoadingSkeleton />
    }

<b>Streaming</b> allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client.

Previously, users might have to wait for the complete page to generate. Now the server will transmit the client small pieces of the UI as it is generated.

Read More: [Loading and Streaming in Next.js 13+](https://nextjs.org/docs/app/https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)

<br>
##### 6. Turbopack
Next.js 13 released a new JavaScript bundler called Turbopack, which is referred to as the “successor to Webpack”.

“Turbopack, which was developed by the Webpack creators and is constructed in Rust, promises to be 700 times faster than the original Webpack”.

    "dev": "next dev --turbo"

Read More: [Turbopack in Next.js 13+](https://nextjs.org/docs/architecture/turbopack)

<br>
##### 7. next/image, next/link, next/font
    // Without <a>, Easier, a time saver, and a clean code.
    <Link href="/about"> Home </Link>

    // images will load faster, even on slow connections.
    <Image src="/profile.png" width={500} height={500} alt="" />

    @next/font We don’t need to download the google fonts locally and
    no need for CDN links.
    Also it does not send extra external network requests to google fonts
    and it does not face a layout shift error in next.js which
    is more important for SEO.

Read More: [next/image, next/link, next/font Next.js 13+](https://nextjs.org/docs/architecture/turbopack)

<br>
##### 8. MetaData
"Next.js has a Metadata API that can used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability".

    // Add in layout.tsx files. It is Static Metadata
    import { Metadata } from 'next';
    export const metadata : Metadata = {
        title: 'About Page',
        description: 'About page description',
    }

You can also add metadata dynamically with props object above component's function.

    type Props = {
        params: { id: string }
        searchParams: { [key: string]: string | string[] | undefined }
    }

Read More: [next/image, next/link, next/font Next.js 13+](https://nextjs.org/docs/architecture/turbopack)
