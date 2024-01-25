import tw from 'twin.macro'
import MainLogoBlue from '../components/Logos/MainLogoBlue'
import MainMenuBgWhite from '../components/mainMenu/MainMenuBgWhite'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import Footer from '../components/footer/Footer'
import AboutSite from '../components/aboutSite/AboutSite'
import BusinessSlogan from '../components/businessSlogan/BusinessSlogan'
import VisionMission from '../components/VisionMission/VisionMission'
import OurClients from '../components/ourClients/OurClients'
import Header from '../components/Header/Header'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const About = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto] gap-y-28">
      {/* background  */}

      {/* Main Header Menu */}
      <div tw="flex flex-col gap-y-2 py-8 px-8 justify-center">
        {/* Main Header Menu  */}
        <Header/>
        <AboutSite />
      </div>

      <div tw="flex flex-col gap-y-8 px-4 ">
        <ProfessionalTeams />
      </div>
      {/* <div tw="flex flex-col w-[1440px] gap-4"> */}
      <BusinessSlogan />
      <VisionMission />
      <OurClients />
      {/* </div> */}

      <div tw="container w-screen">
        <Footer />
      </div>
    </div>
  </div>
)

export default About
