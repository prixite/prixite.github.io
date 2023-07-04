export interface BlogPost {
  frontmatter: {
    cover_image: string
    date: string
    excerpt: string
    title: string
    author: string
  }
  slug: string
}

export interface Product {
  frontmatter: {
    index: number
    title: string
    header: string
    description: string
    date: number
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

export interface Product {
  frontmatter: {
    index: number
    title: string
    header: string
    description: string
    date: number
  }
  slug: string
}

export interface EmployeePost {
  frontmatter: {
    id: number
    name: string
    title: string
    category: string
    image: string
    imageB: string
    description: string
    moreInfoOne: string
    moreInfoTwo: string
    developmentStack: Array<{ name: string; icon: string }>
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
    company: string
    website: string
  }
  slug: string
}

export interface AboutUs {
  frontmatter: {
    index: number
    title: string
    header: string
    heading: string
    description: string
    shortDescription: string
    image: string
  }
  content: string
}
export interface MDContent {
  blogs?: Array<BlogPost>
  services?: Array<ServicePost>
  employees?: Array<EmployeePost>
  testimonials?: Array<Testimonial>
  aboutUs: AboutUs
  product?: Array<Product>
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}

export interface ServiceWithContent extends ServicePost {
  content: string
}

export interface ProductDetailWithContent extends Product {
  content: string
}

export interface EmployeeWithContent extends EmployeePost {
  content: string
}

export interface Blog {
  params: {
    slug: string
  }
}

export interface ProductDetail {
  params: {
    slug: string
  }
}

export interface Service {
  params: {
    slug: string
  }
}

export interface ProductDetail {
  params: {
    slug: string
  }
}
export interface Employee {
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
