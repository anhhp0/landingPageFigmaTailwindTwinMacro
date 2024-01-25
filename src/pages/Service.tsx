import tw from 'twin.macro'
import MainLogoBlue from '../components/Logos/MainLogoBlue'
import MainMenuBgWhite from '../components/MainMenu/MainMenuBgWhite'
import Footer from '../components/Footer/Footer'
import OurServices from '../components/OurServices/OurServices'
import TreatmentVideo from '../components/OurServices/TreatmentVideo'
import ServicesFAQ from '../components/ServicesFAQ/ServicesFAQ'
import Header from '../components/Header/Header'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Service = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto] gap-y-28 ">
      {/* background  */}

      {/* Main Header Menu */}
      <div tw="flex flex-col gap-y-2 py-8 px-8">
        {/* Main Header Menu  */}
<Header/>
        <OurServices />
      </div>
      <div tw="">
        <TreatmentVideo />
      </div>

      <ServicesFAQ />
      <div tw="container w-screen">
        <Footer />
      </div>
    </div>
  </div>
)

export default Service
