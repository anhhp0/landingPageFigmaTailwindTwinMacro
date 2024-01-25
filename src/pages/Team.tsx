import AssistanceTeam from '../components/AssistanceTeam/AssistanceTeam'
import OurTestimonials from '../components/AssistanceTeam/OurTestimonials'
import TeamSlogan from '../components/AssistanceTeam/TeamSlogan'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import Layout from '../layout'


const Blog = () => {
  return (
    <Layout>
      <ProfessionalTeams />
      <AssistanceTeam />
      <TeamSlogan />
      <OurTestimonials/>
    </Layout>
  )
}

export default Blog
