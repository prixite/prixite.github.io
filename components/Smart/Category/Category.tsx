import { Typography } from '@mui/material'

interface CategoryInterface {
  label: string
  selected?: boolean
  handleClick?: (label: string) => void
}

const Category: React.FC<CategoryInterface> = ({
  label,
  selected,
  handleClick,
}) => {
  return (
    <div
      className={selected ? 'selected' : ''}
      // eslint-disable-next-line
      // @ts-ignore
      onClick={() => handleClick(label)}
    >
      <Typography fontWeight={500}>{label}</Typography>
    </div>
  )
}

export default Category
