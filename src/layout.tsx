import React, { ReactNode } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import tw from 'twin.macro';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer  tw='container w-screen'/>
    </>
  )
}

export default Layout
