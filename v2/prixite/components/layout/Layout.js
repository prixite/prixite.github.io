import React from 'react'
import Footer from '../footer/Footer'

const Layout = ({children}) => {

  return (
    <>
        {children}
        <Footer />
    </>
  )
}

export default Layout