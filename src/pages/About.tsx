import tw from 'twin.macro'
import Layout from '../layout'
import AboutSite from '../components/AboutSite/AboutSite'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import BusinessSlogan from '../components/BusinessSlogan/BusinessSlogan'
import VisionMission from '../components/VisionMission/VisionMission'
import OurClients from '../components/OurClients/OurClients'


const About = () => {
  return (
    <Layout>
      <AboutSite />
      <ProfessionalTeams />
      <BusinessSlogan />
      <VisionMission />
      <OurClients/>
    </Layout>
  )
}

export default About
