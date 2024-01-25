import ContactUsContactSite from '../components/Contact/MainContactUsContactSite'
import Layout from '../layout'
import Map from '../assets/map.svg'
import GetInTouch from '../components/Contact/GetInTouch'

const Contact = () => {
  return (
    <Layout>
      <ContactUsContactSite />
      <img src={Map} />
      <GetInTouch/>
    </Layout>
  )
}

export default Contact
