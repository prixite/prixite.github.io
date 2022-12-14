export interface BlogPost {
  frontmatter: {
    cover_image: string
    date: string
    excerpt: string
    title: string
  }
  slug: string
}

export interface ServicePost {
  frontmatter: {
    index: number
    title: string
    header: string
    description: string
    logo_image: string
  }
  slug: string
}
export interface MDContent {
  blogs?: Array<BlogPost>
  services?: Array<ServicePost>
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}

export interface ServiceWithContent extends ServicePost {
  content: string
}

export interface Blog {
  params: {
    slug: string
  }
}

export interface Service {
  params: {
    slug: string
  }
}

export interface SortByDateParam {
  frontmatter: {
    [key: string]: any
  }
}

export interface SortbyIndexParam {
  slug: string
  frontmatter: { [key: string]: any }
}
