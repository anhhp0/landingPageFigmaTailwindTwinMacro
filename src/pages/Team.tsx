import tw from 'twin.macro'
import MainLogoBlue from '../components/Logos/MainLogoBlue'
import MainMenuBgWhite from '../components/MainMenu/MainMenuBgWhite'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import Footer from '../components/Footer/Footer'

import AssistanceTeam from '../components/AssistanceTeam/AssistanceTeam'
import TeamSlogan from '../components/AssistanceTeam/TeamSlogan'
import OurTestimonials from '../components/AssistanceTeam/OurTestimonials'
import Header from '../components/Header/Header'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Team = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto]  gap-24">
      {/* background  */}

      {/* Main Header Menu */}
<Header/>

      <div tw="flex flex-col gap-y-8 px-4">
        <ProfessionalTeams />
      H</div>
      <AssistanceTeam />
      <TeamSlogan />
      <OurTestimonials />
      <div tw="container w-screen">
        <Footer />
      </div>
    </div>
  </div>
)

export default Team
