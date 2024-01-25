import tw from 'twin.macro'
import MainLogoBlue from '../components/Logos/MainLogoBlue'
import MainMenuBgWhite from '../components/mainMenu/MainMenuBgWhite'
import ProfessionalTeams from '../components/ProfessionalTeam/ProfessionalTeam'
import Footer from '../components/footer/Footer'

import AssistanceTeam from '../components/assistanceTeam/AssistanceTeam'
import TeamSlogan from '../components/assistanceTeam/TeamSlogan'
import OurTestimonials from '../components/assistanceTeam/OurTestimonials'
import BlogThumbnail from '../components/blog/BlogThumbnail'
import BlogSite from '../components/Blog/BlogSite'
import Header from '../components/Header/Header'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Blog = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto] gap-16">
      {/* background  */}

      {/* Main Header Menu */}
     <Header/>

      <div tw="flex flex-col gap-y-8 px-4 ">
        <BlogThumbnail />
      </div>
      <BlogSite />
      <div tw="container w-screen">
        <Footer />
      </div>
    </div>
  </div>
)

export default Blog
