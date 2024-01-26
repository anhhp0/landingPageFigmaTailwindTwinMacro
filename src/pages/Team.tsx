import AssistanceTeam from '../components/TeamSite/AssistanceTeam'
import OurTestimonials from '../components/TeamSite/OurTestimonials'
import TeamSlogan from '../components/TeamSite/TeamSlogan'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import Layout from '../layout/layout'

const Blog = () => {
  return (
    <Layout>
      <ProfessionalTeams />
      <AssistanceTeam />
      <TeamSlogan />
      <OurTestimonials />
    </Layout>
  )
}

export default Blog
