import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
