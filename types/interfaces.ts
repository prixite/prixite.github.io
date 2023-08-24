import { SubresourceIntegrityAlgorithm } from 'next/dist/build/webpack/plugins/subresource-integrity-plugin'

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

export interface JobPost {
  frontmatter: {
    index: number
    title: string
    header: string
    description: string
    logo_image: string
    currency: string
    salary_range: number
    designation: string
    vacancy: string
    status: string
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
  jobs?: Array<JobPost>
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

export interface JobWithContent extends JobPost {
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

export interface Job {
  params: {
    slug: string
  }
}

export interface DataProps {
  params: {
    slug: string
  }
  jobDetail: object
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

export interface Props {
  data: {
    data: Array<Jobs>
  }
}

export interface JobProps {
  data: Props
  params: DataProps
}

export interface Jobs {
  name: string
  company: string
  creation: string
  currency: string
  department: string
  description: string
  designation: string
  docstatus: number
  idx: number
  job_application_route: string
  job_requisition: string
  job_title: string
  lower_range: number
  modified: string
  modified_by: string
  owner: string
  planned_vacancies: number
  publish: number
  publish_salary_range: number
  route: string
  staffing_plan: string
  status: string
  upper_range: number
  vacancies: number
  _user_tags: string[] | null
  _comments: string[] | null
  _assign: string[] | null
  _liked_by: string[] | null
}

export interface ResultProps {
  result: {
    data: Array<Jobs>
  }
}

export interface ResProps {
  data: Array<Jobs>
}
