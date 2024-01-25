import OurServices from '../components/OurServices/OurServices'
import TreatmentVideo from '../components/OurServices/TreatmentVideo'
import ServicesFAQ from '../components/ServicesFAQ/ServicesFAQ'
import Layout from '../layout'


const Blog = () => {
  return (
    <Layout>
      <OurServices />
      <TreatmentVideo />
      <ServicesFAQ/>
    </Layout>
  )
}

export default Blog
