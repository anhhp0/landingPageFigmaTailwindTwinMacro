import tw from 'twin.macro'
import MainLogoBlue from '../components/Logos/MainLogoBlue'
import MainSlider from '../components/MainSlider/MainSlider'
import NavBarSliderBg from '../components/MainSlider/NavBarslideBackground'
import MainMenuBgWhite from '../components/MainMenu/MainMenuBgWhite'
import MainServicesHome1 from '../components/MainServicesHome1/MainServicesHome1'
import AboutUs from '../components/AboutUs/AboutUs'
import AboutUsBg from '../components/AboutUs/AboutUsBg'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import ContactUs from '../components/ContactUs/ContactUs'
import ContactUsBg from '../components/ContactUs/ContactUsBg'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Home1 = () => (
  <div css={styles.container({ hasBackground: true })}>
    <NavBarSliderBg tw="top-0 left-0 max-w-[1440px] lg:justify-center" />
    <div tw="flex flex-col gap-y-5">
      {/* background  */}

      {/* Main Header Menu + Slider  */}
      <div tw="flex flex-col gap-y-2 py-8 px-8">
        {/* Main Header Menu  */}
  <Header/>
        {/* Main Header Menu */}

        {/* Main Slider  */}
        <MainSlider />
        {/* Main Slider  */}

        {/* Main Service  */}
      </div>
      {/* Main Header Menu + Slider */}
      {/* ////  */}
      {/* .
      . 
      . 
      . 
     */}
      {/* Main services + About Us  */}
      {/* <div tw="flex flex-col h-full gap-y-1 px-4 py-2"> */}
      <div tw="flex flex-col gap-y-2 max-md:[margin-top: -400px] px-8">
        {/* Main services  */}
        <AboutUsBg />
        <div tw="">
          <MainServicesHome1 />
        </div>
        {/* Main services  */}
        {/* . 
        . 
        .  */}
        {/* About Us  */}
        <div tw="">
          <AboutUs />
        </div>

        {/* About Us  */}
      </div>
      {/* Main services + About Us  */}
      {/* . 
      . 
      .  */}
      {/* Professional team + Contact Us  */}
      <ContactUsBg />
      <div tw="flex flex-col gap-y-8 px-4">
        <ProfessionalTeams />
      </div>
      {/* Professional team + Contact Us  */}
      <div tw="flex flex-col gap-y-8 px-4 ">
        {' '}
        <ContactUs />
      </div>

      <div tw="container w-screen">
        <Footer />
      </div>
    </div>
  </div>
)

export default Home1
