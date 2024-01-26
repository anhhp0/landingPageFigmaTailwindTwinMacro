import ContactUsContactSite from './ContactSite/MainContactUsContactSite'
import Layout from '../../layout/layout'
import Map from '../../assets/map.svg'
import GetInTouch from './ContactSite/GetInTouch'
import tw from 'twin.macro'

const Contact = () => {
  return (
    <Layout>
      <ContactUsContactSite />
      <img src={Map} tw="mx-auto justify-center" />
      <GetInTouch />
    </Layout>
  )
}

export default Contact
