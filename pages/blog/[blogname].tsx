import { useEffect, useState } from 'react'
import Head from 'next/head'
import { BlogPost } from '../../types/interfaces'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-python'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/components/prism-markup-templating'
import axios from 'axios'
import dynamic from 'next/dynamic'

export default function BlogDetailPage({ blog }: { blog: BlogPost }) {

  const Blog = dynamic(() => import('../../components/Presentational/SingleBlog/Blog'), { ssr: false })

  useEffect(() => {
    Prism.highlightAll()
  }, [])


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
