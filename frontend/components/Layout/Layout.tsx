import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
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