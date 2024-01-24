import tw from 'twin.macro'
import MainLogoBlue from '../logos/mainLogoBlue'
import MainMenuBgWhite from '../mainMenu/MainMenuBgWhite'
import ProfessionalTeams from '../professionalTeam/professionalTeam'
import Footer from '../footer/Footer'

import AssistanceTeam from '../assistanceTeam/AssistanceTeam'
import TeamSlogan from '../assistanceTeam/TeamSlogan'
import OurTestimonials from '../assistanceTeam/OurTestimonials'
import BlogThumbnail from '../blog/BlogThumbnail'
import BlogSite from '../blog/blogSite'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-full max-w-[1440px] [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Blog = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto] w-screen gap-16">
      {/* background  */}

      {/* Main Header Menu */}
      <div tw="flex flex-col gap-y-2  py-8 px-8">
        {/* Main Header Menu  */}
        <div tw="flex flex-row flex-wrap place-items-center pb-0">
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
        </div>
      </div>

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
