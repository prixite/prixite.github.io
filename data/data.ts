import homeHeaderImage from '../public/images/headerImage.png'
import youtubeIcon from '../public/images/youtubeIcon.png'
import FacebookIcon from '../public/images/blog-detail-fb.png'
import LocationIcon from '../public/images/location-icon.png'
import PhoneIcon from '../public/images/phone-icon.png'
import MailIcon from '../public/images/mail-icon.png'
import TestimonialLeft from '../public/images/testimonial-left.svg'
import TestimonialRight from '../public/images/testimonial-right.svg'
import AboutUsVision from '../public/images/about-us-vision.png'
import LinkdeinIcon from '../public/images/linkdein-icon.png'
import aboutUsp1 from '../public/images/aboutUs-p1.png'
import aboutUsp2 from '../public/images/aboutUs-p2.png'
import aboutUsp3 from '../public/images/aboutUs-p3.png'
import aboutUsp4 from '../public/images/aboutUs-p4.png'
import aboutUsp5 from '../public/images/aboutUs-p5.png'
import banner from '../public/images/banner.png'
import bannerP1 from '../public/images/banner-p1.png'
import bannerP2 from '../public/images/banner-p2.png'
import bannerP3 from '../public/images/banner-p3.png'
import bannerP4 from '../public/images/banner-p4.png'
import bannerP5 from '../public/images/banner-p5.png'
import bannerP6 from '../public/images/banner-p6.png'
import likes from '../public/images/handsClapping.png'
import comments from '../public/images/chatTeardropDots.png'
import scrollToTop from '../public/images/scrollToTop.png'
import InstagramIcon from '../public/images/instagram-icon.png'
import { FEATURES } from '../data/features'

/*********          Header Menu Data            ********** */
export const pages = [
  {
    path: '/about-us',
    text: 'About Us',
  },
  {
    path: '/services',
    text: 'Services',
  },
  {
    path: '/contact-us',
    text: 'Contact Us',
  },
  {
    path: '/team',
    text: 'Meet the team',
  },
  {
    path: '/jobs',
    text: 'Jobs',
  },
]
if (FEATURES.blogs) {
  pages.push({
    path: '/blogs',
    text: 'News & Blogs',
  })
}

if (FEATURES.product) {
  pages.push({
    path: '/product',
    text: 'Products',
  })
}

export const siteName = 'Prixite'

/***********            Home Page Main Data             *********** */
export const homeData = {
  title: `${siteName}`,
  header: 'Transform Your Business With Us',
  headerImage: homeHeaderImage,
  heading: 'One-stop Solution to Your Business Needs',
  homeAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  contactUsButtonText: 'Contact Us',
  videoButtonText: 'Watch Video',
  youtubeIcon: youtubeIcon,
  paragraphs: [
    {
      para: `Prixite is one online technology solutions provider company that is
            considered as a new breed of thinkers who is driven to create
            effective business solutions for its clients. We aspire to become
            our client’s first choice when it comes to being a world leader in
            the progress and advancement of businesses through digital
            platforms.`,
    },
    {
      para: `Our goal is to offer our clients complete customer satisfaction,
            growth, innovation, and a continuous path to evolve and grow within
            their industry. We aim to constantly bring innovative solutions to
            cater to our client’s requirements and expectations.`,
    },
    {
      para: `Our team of professionals is always on our client’s side offering
            them alluring and tailor-made solutions to the ever-changing
            landscape of their business industry to achieve innovative,
            scalable, customized, and cost-effective solutions to your business
            needs.`,
    },
  ],
}

/**********           News and Blogs Data             ********* */
export const newsAndBlogs = {
  title: `${siteName} - Blogs`,
  header: 'News & Blogs',
  heading:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  viewButtonText: 'View All',
  likesImg: likes,
  commentsImg: comments,
  scrollToTopImg: scrollToTop,
}

/**********           Testimonials Data             ********** */
export const testimonialsData = {
  heading: 'Our Testimonials',
  leftImg: TestimonialLeft,
  rightImg: TestimonialRight,
}

/**********            Home Page Services Data          ********* */
export const servicesData = {
  servicesPageTitle: 'Services',
  servicesPageHeader: 'We are Offering the Amazing Services 🚀',
  servicesHeading: 'Our Services',
  servicesAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
}

/**********             About Us Page Data            *************/
export const aboutUsPageData = {
  title: 'About Us',
  header: 'We are Changing the Whole Game',
  heading: 'Fastest Growing IT Company',
  aim: 'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  description: `Prixite is one online technology solutions provider company that is
  considered as a new breed of thinkers who is driven to create
  effective business solutions for its clients. We aspire to become
  our client’s first choice when it comes to being a world leader in
  the progress and advancement of businesses through digital
  platforms.`,
  visionTitle: 'Our Vision',
  visionAim:
    'We aim to constantly bring innovative solutions to cater to our client’s requirements and expectations.',
  visionImage: AboutUsVision,
  visionData: [
    {
      value: '30+',
      text: 'Years of Experience',
    },
    {
      value: '27',
      text: 'Offices Worldwide',
    },
    {
      value: '150',
      text: 'National Markets',
    },
    {
      value: '2M+',
      text: 'Clients a Year',
    },
  ],
}

/**********             About US Card Data               *********** */
export const aboutUsCardData = {
  aboutUsHeader: 'About Us',
  aboutUsHeading: 'Fastest Growing IT Company',
  aboutUsDescription:
    "Prixite is a software development company specializing in Python, Machine Learning, and JavaScript. We have a team of skilled developers with a wealth of experience in these areas, and we pride ourselves on delivering top-quality software solutions to our clients. Whether you need a simple website or a complex machine learning application, we have the expertise to get the job done. At Prixite, we are committed to providing excellent customer service and delivering results that exceed our clients' expectations.",
  images: [
    {
      img: aboutUsp1,
      className: 'img-p1',
    },
    {
      img: aboutUsp2,
      className: 'img-p2',
    },
    {
      img: aboutUsp3,
      className: 'img-p3',
    },
    {
      img: aboutUsp4,
      className: 'img-p4',
    },
    {
      img: aboutUsp5,
      className: 'img-p5',
    },
  ],
}

/**********             Banner Card Data               *********** */
export const bannerCardData = {
  aboutUsHeader: 'Official US odoo Partners',
  aboutUsDescription:
    'PRIXITE. is the Official US Partner of odoo and we strive to provide cutting-edge solutions tailored to elevate your business operations',
  images: [
    {
      img: bannerP1,
      className: 'img-p1',
    },
    {
      img: banner,
      className: 'img-p2',
    },
    {
      img: bannerP2,
      className: 'img-p3',
    },
    {
      img: bannerP3,
      className: 'img-p4',
    },
    {
      img: bannerP4,
      className: 'img-p5',
    },
    {
      img: bannerP5,
      className: 'img-p6',
    },
  ],
  partnersCard: [
    {
      title: 'Odoo Implementation',
      description:
        'Prixite transforms your business needs into seamless Odoo implementations, optimizing processes for sustained growth.',
      img: bannerP6,
    },
    {
      title: 'Odoo Custom Development',
      description:
        'Prixite crafts tailored Odoo solutions, seamlessly integrating custom features for a unified and efficient platform',
      img: bannerP6,
    },
  ],
}

/*********          Contact Us Page Data            ************* */
export const contactUs = {
  title: `${siteName} - Contact Us`,
  heading: 'Contact Us & Start Build Amazing Products',
}

/**********             Careers Page Data           ************* */
export const careersData = {
  title: `${siteName} - Careers`,
  heading: 'JOIN US',
  buttonText: 'Search Jobs',
}

export const joinUsLinkIcons = [
  {
    icon: FacebookIcon,
    width: 13,
    height: 20,
    path: 'https://web.facebook.com/prixite/',
  },
  {
    icon: LinkdeinIcon,
    width: 24,
    height: 25,
    path: 'https://www.linkedin.com/company/prixite/mycompany/',
  },
]

/*********          Meet the Team Page Data            ************* */
export const categories: Array<string> = [
  'All',
  'Machine Learning',
  'Web App Development',
  'Mobile App Development',
  'Scraping',
  'Quality Assurance',
]

export interface Employee {
  id: number
  name: string
  title: string
  image: string
  description: string
  moreInfo: string
  DevelopmentStack: Array<string>
  facebookLink?: string
  twitterLink?: string
  linkedInLink?: string
  category: string
}

/**************             Footer Data         ************ */
export const footerData = {
  copyright: `Prixite © ${new Date().getFullYear()}. All Rights Reserved`,
  details: [
    {
      icon: LocationIcon,
      desc: 'Sheridan, WY, USA | Lahore, Pakistan',
    },
    {
      icon: PhoneIcon,
      desc: '+1 (628) 277-3693',
    },
    {
      icon: MailIcon,
      desc: 'hi@prixite.com',
    },
  ],
  info: {
    title: 'More Information',
    contactUs: [
      {
        text: 'About Us',
        path: '/about-us',
      },
      {
        text: 'Contact us',
        path: '/contact-us',
      },
      {
        text: 'Services',
        path: '/services',
      },
      {
        path: '/jobs',
        text: 'Jobs',
      },
      {
        text: 'News & Blogs',
        path: '/blogs',
      },
    ],
  },
  joinUs: {
    title: 'Join Us On',
    links: [
      {
        icon: FacebookIcon,
        width: 13,
        height: 20,
        path: 'https://web.facebook.com/prixite/',
      },
      {
        icon: LinkdeinIcon,
        width: 24,
        height: 25,
        path: 'https://www.linkedin.com/company/prixite/mycompany/',
      },
      {
        icon: InstagramIcon,
        width: 24,
        height: 25,
        path: 'https://www.instagram.com/prixitegram/',
      },
    ],
  },
}

export const contactForm = {
  success: 'Submitted',
  error: 'Not submitted. Please try again!',
}

export const productsList = {
  title: `${siteName} - Product`,
  header: 'Our Products',
  heading:
    'Our aim is to build secure and reliable products and fulfill our clients requirements.',
}

/**********            Home Page Jobs Data          ********* */
export const jobsData = {
  jobsPageTitle: 'Jobs',
  jobsPageHeader: 'Careers at Prixite 🚀',
  jobPageHeader: 'Full time - Remote',
  jobsHeading: 'Our Jobs',
  aboutRole: 'About the Role',
  description: 'Description',
  jobDataNotFound: 'No Jobs available currently',
  positionClose: 'This position is closed.',
  pageNotFound: '404 | This Page could not be found',
}
