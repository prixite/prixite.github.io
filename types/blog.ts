export interface BlogPost {
    frontmatter: {
      cover_image: string
      date: string
      excerpt: string
      title: string
    }
    slug: string
}

export interface Posts {
    posts: Array<BlogPost>
}

export interface BlogPostWithContent extends BlogPost {
    content: string
}

export interface Post {
    params: {
        slug: string
    }
}