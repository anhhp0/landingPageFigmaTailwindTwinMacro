import tw from 'twin.macro'
import MainLogoBlue from '../logos/mainLogoBlue'
import MainSlider from '../mainSlider/MainSlider'
import NavBarSliderBg from '../mainSlider/navBarslideBackground'
import MainMenuBgWhite from '../mainMenu/MainMenuBgWhite'
import MainServicesHome1 from '../mainServicesHome1/MainServicesHome1'
import AboutUs from '../aboutUs/AboutUs'
import AboutUsBg from '../aboutUs/AboutUsBg'
import ProfessionalTeams from '../professionalTeam/professionalTeam'
import ContactUs from '../contactUs/ContactUs'
import ContactUsBg from '../contactUs/ContactUsBg'
import Footer from '../footer/Footer'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-full max-w-[1440px] [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Home1 = () => (
  <div css={styles.container({ hasBackground: true })}>
    <NavBarSliderBg tw="top-0 left-0" />
    <div tw="flex flex-col gap-y-5">
      {/* background  */}

      {/* Main Header Menu + Slider  */}
      <div tw="flex flex-col gap-y-2 px-4 py-8 px-8">
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
      <div tw="flex flex-col gap-y-2 px-4 max-md:[margin-top: -400px] px-8">
        {/* Main services  */}
        <AboutUsBg />
        <div tw="w-screen">
          <MainServicesHome1 />
        </div>
        {/* Main services  */}
        {/* . 
        . 
        .  */}
        {/* About Us  */}
        <div tw="w-screen">
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
      <div tw="flex flex-col gap-y-8 px-4 w-screen">
        <ProfessionalTeams />
      </div>
      {/* Professional team + Contact Us  */}
      <div tw="flex flex-col gap-y-8 px-4 w-screen">
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
