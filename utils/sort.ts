import { SortByDateParam, SortbyIndexParam } from '../types/interfaces'

export const sortByDate = (a: SortByDateParam, b: SortByDateParam) => {
  return (
    Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date))
  )
}

export const sortByIndex = (a: SortbyIndexParam, b: SortbyIndexParam) => {
  return Number(a.frontmatter.index) - Number(b.frontmatter.index)
}
