import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import Seo from './Seo'

export default function Layout({children}) {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main> 
       <Footer />
    </>
  )
}
