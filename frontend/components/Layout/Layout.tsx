import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { LayoutProps } from './layout.props'
import {inspect} from 'util';
import styles from './layout.module.css'

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <div className={styles.container}>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout