import tw from 'twin.macro'
import Layout from '../layout/layout'
import MainSlider from '../components/MainSlider/MainSlider'
import MainServicesHome1 from '../components/MainServicesHome/MainServicesHome1'
import AboutUs from '../components/AboutUs/AboutUs'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import ContactUs from '../components/ContactUs/ContactUs'


const Home = () => {
  return (
    <Layout>
      <MainSlider />
      <MainServicesHome1 />
      <AboutUs />
      <ProfessionalTeams />
      <ContactUs />
    </Layout>
  )
}

export default Home
