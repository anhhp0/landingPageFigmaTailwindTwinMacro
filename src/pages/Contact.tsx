import tw from 'twin.macro'
import MainLogoBlue from '../components/Logos/MainLogoBlue'
import MainMenuBgWhite from '../components/mainMenu/MainMenuBgWhite'
import Footer from '../components/footer/Footer'
import GetInTouch from '../components/Contact/GetInTouch'
import ContactUsContactSite from '../components/Contact/MainContactUsContactSite'
import Map from '../assets/map.svg'
import Header from '../components/Header/Header'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Contact = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto] gap-16">
      {/* background  */}

      {/* Main Header Menu */}
    <Header/>
      <ContactUsContactSite />
      <img src={Map} tw="justify-center m-auto" />
      <GetInTouch />
      <div tw="container w-screen">
        <Footer />
      </div>
    </div>
  </div>
)

export default Contact
