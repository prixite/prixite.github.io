import { SortByDateParam, SortbyIndexParam } from '../types/interfaces'

export const sortByDate = (a: SortByDateParam, b: SortByDateParam) => {
  return (
    Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date))
  )
}

export const sortByIndex = (a: SortbyIndexParam, b: SortbyIndexParam) => {
  return Number(a.frontmatter.index) - Number(b.frontmatter.index)
}

export const sortByTitle = (titles: string[]): string[] => {
  const sequenceOrder = [
    'CEO and Founder Prixite',
    'Principal Software Engineer',
    'Senior Software Engineer | Team Lead',
    'Senior ML Engineer',
    'Senior Software Engineer',
    'Senior Data Scientist',
    'Team Lead for ScoopRank',
    'Technical Team Lead',
    'Software Engineer | Team Lead',
    'Senior SQA Engineer',
    'Software Engineer',
    'Data Scientist',
    'SQA Engineer',
    'Machine Learning Engineer',
    'Python Django Developer',
    'Frontend Engineer',
    'Front-End Software Engineer',
    'Front-End Developer',
    'Junior Software Developer',
    'Trainee Engineer',
    'Assistant Manager HR',
    'Sales Project Manager',
    'Admin Operations',
    'Manager Accounts & Finance',
    'Marketing Executive',
    'Senior Business Development Executive',
    'UI/UX Designer',
  ]

  const customSort = (a: string, b: string): number => {
    const orderA = sequenceOrder.indexOf(a)
    const orderB = sequenceOrder.indexOf(b)

    if (orderA !== -1 && orderB !== -1) {
      return orderA - orderB
    }

    if (orderA !== -1) {
      return -1
    }

    if (orderB !== -1) {
      return 1
    }

    return a.localeCompare(b)
  }

  const sortedTitles = [...titles].sort(customSort)

  return sortedTitles
}
