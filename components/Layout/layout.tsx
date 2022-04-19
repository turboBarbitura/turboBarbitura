import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import { LayoutProps } from './layout.props'

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout