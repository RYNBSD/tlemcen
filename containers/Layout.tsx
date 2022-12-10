import React from 'react'

import { Navbar, Footer } from '../components'

interface layoutInterface {
  children:React.ReactNode,
}

const Layout = ({ children }:layoutInterface):JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout