import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import './main.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import Home1 from './components/mainPages/Home1'
import About from './components/mainPages/About'
import Service from './components/mainPages/Service'
import Gallery from './components/mainPages/Gallery'
import Team from './components/mainPages/Team'
import Blog from './components/mainPages/Blog'
import Contact from './components/mainPages/Contact'
import AllRoutes from './components/mainPages/allRouter'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <Home1 /> */}
    {/* <About/> */}
    {/* <Service/> */}
    {/* <Gallery /> */}
    {/* <Team /> */}
    {/* <Blog /> */}
    {/* <Contact/> */}
    <AllRoutes/>
  </React.StrictMode>,
)
