import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import './main.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import Home1 from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'
import Gallery from './pages/Gallery/Gallery'
import Team from './pages/Team/Team'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import AllRoutes from './routes/AllRouter'

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
    <AllRoutes />
  </React.StrictMode>,
)
