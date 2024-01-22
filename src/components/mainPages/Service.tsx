import tw from 'twin.macro'
import MainLogoBlue from '../logos/mainLogoBlue'
import MainMenuBgWhite from '../mainMenu/MainMenuBgWhite'

import Footer from '../footer/Footer'



import OurServices from '../ourServices/OurServices'
import TreatmentVideo from '../ourServices/TreatmentVideo'
import ServicesFAQ from '../servicesFAQ/ServicesFAQ'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-full max-w-[1440px] [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Service = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto] gap-y-28 w-screen">
      {/* background  */}

      {/* Main Header Menu */}
      <div tw="flex flex-col gap-y-2 py-8 px-8">
        {/* Main Header Menu  */}
        <div tw="flex flex-row flex-wrap place-items-center pb-36">
          {/* Logo header  */}
          <div tw="flex-none justify-items-start mr-32">
            <MainLogoBlue />
          </div>
          {/* Logo Header  */}
          {/* /// */}
          {/* Navigation  */}
          <div tw="flex justify-end ">
            {' '}
            <MainMenuBgWhite />
          </div>

          {/* Navigation  */}
        </div>
        <OurServices />
      </div>
      <div tw=" w-screen">
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
