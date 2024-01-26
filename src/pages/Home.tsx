import tw from 'twin.macro'
import Layout from '../layout/layout'
import MainSlider from '../components/MainSlider/MainSlider'
import MainServicesHome1 from '../components/MainServicesHome/MainServicesHome1'
import AboutUs from '../components/AboutUs/AboutUs'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import ContactUs from '../components/ContactUs/ContactUs'
import NavBarSliderBg from '../components/MainSlider/NavBarslideBackground'
import AboutUsBg from '../components/AboutUs/AboutUsBg'
import ContactUsBg from '../components/ContactUs/ContactUsBg'

const Home1 = () => {
  return (
    <Layout>
      <NavBarSliderBg />
      <MainSlider />
      <MainServicesHome1 />
      <AboutUs />
      <AboutUsBg />
      <ProfessionalTeams />
      <ContactUsBg />
      <ContactUs />
    </Layout>
  )
}

export default Home1
