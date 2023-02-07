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

export interface Testimonial {
  frontmatter: {
    index: number
    image: string
    description: string
    name: string
    designation: string
    date: string
    product: string
    product_link: string
  }
  slug: string
}
export interface MDContent {
  blogs?: Array<BlogPost>
  services?: Array<ServicePost>
  testimonials?: Array<Testimonial>
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
    [key: string]: string | number
  }
}

export interface SortbyIndexParam {
  slug: string
  frontmatter: { [key: string]: string | number }
}
