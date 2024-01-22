import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home1 from './Home1'
import About from './About'
import Service from './Service'
import Gallery from './Gallery'
import Blog from './Blog'
import Contact from './Contact'

const AllRoutes: React.FC = () => (

      <BrowserRouter>
        <Routes>
          <Route index element={<Home1 />} />
          <Route path="/" element={<Home1 />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  )


export default AllRoutes
