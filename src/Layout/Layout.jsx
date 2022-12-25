import React from 'react'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Header from './Header/Header'
function Layout() {
  return (
    <div  className='h-screen overflow-y-auto flex flex-col justify-between'>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default Layout