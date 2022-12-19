import path from 'path'
import matter from 'gray-matter'

export const getMarkdownAllData = (
  files: string[],
  mdPath: string,
  // eslint-disable-next-line
  module: any
) => {
  return files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = module.readFileSync(
      path.join(mdPath, filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })
}

export const getMarkDownSingleData = (
  // eslint-disable-next-line
  module: any,
  mdPath: string,
  slug: string
) => {
  const markdownWithMeta = module.readFileSync(
    path.join(mdPath, slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

// eslint-disable-next-line
export const getMarkdownSinglePath = (module: any, mdPath: string) => {
  const files = module.readdirSync(path.join(mdPath))

  const paths = files.map((filename: string) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
