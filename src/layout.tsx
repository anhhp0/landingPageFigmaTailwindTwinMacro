import React, { ReactNode } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import tw from 'twin.macro';


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div tw='flex flex-col gap-8'>
      <Header />
      {children}
      <Footer  tw='container w-screen'/>
    </div>
  )
}

export default Layout
