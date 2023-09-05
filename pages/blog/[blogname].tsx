import Head from 'next/head'
import { BlogPost } from '../../types/interfaces'
import axios from 'axios'
import dynamic from 'next/dynamic'

export default function BlogDetailPage({ blog }: { blog: BlogPost }) {
  const Blog = dynamic(
    () => import('../../components/Presentational/SingleBlog/Blog'),
    { ssr: false }
  )

  return (
    <>
      <Head>
        <title>{blog?.title}</title>
      </Head>
      <Blog blog={blog} />
    </>
  )
}

export async function getServerSideProps({
  params: { blogname },
}: {
  params: { blogname: string }
}) {
  try {
    const headers = {
      Authorization: `token ${process.env.NEXT_PUBLIC_ERP_AUTH_TOKEN}`,
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ERP_BASEPATH}/api/resource/Blog%20Post?fields=[%22*%22]&filters=[[%22Blog%20Post%22,%22name%22,%22=%22,%22${blogname}%22]]`,
      {
        headers,
      }
    )
    const blogDataArray = response.data.data
    const blog =
      blogDataArray && blogDataArray.length > 0 ? blogDataArray[0] : null

    return {
      props: {
        blog: blog,
      },
    }
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return {
      props: {
        blog: null,
      },
    }
  }
}
