import ContactUsContactSite from '../components/Contact/MainContactUsContactSite'
import Layout from '../layout'
import Map from '../assets/map.svg'
import GetInTouch from '../components/Contact/GetInTouch'
import tw from 'twin.macro'


const Contact = () => {
  return (
    <Layout>
      <ContactUsContactSite />
      <img src={Map} tw='mx-auto justify-center'/>
      <GetInTouch/>
    </Layout>
  )
}

export default Contact
