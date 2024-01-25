import tw from 'twin.macro'
import MainLogoBlue from '../components/Logos/MainLogoBlue'
import MainMenuBgWhite from '../components/mainMenu/MainMenuBgWhite'
import Footer from '../components/footer/Footer'
import OurGallery from '../components/Gallery/OurGallery'
import ThumbnailVideoTour from '../components/gallery/ThumbnailVideoTour'
import GetTheQuota from '../components/Gallery/GetTheQuota'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col h-screen w-screen [font-family: Poppins]`,
    // hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Gallery = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="grid [grid-row: auto] gap-y-28 ">
      {/* background  */}

      {/* Main Header Menu */}
      <div tw="flex flex-col gap-y-2 py-8 px-8">
        {/* Main Header Menu  */}
        <div tw="flex flex-row flex-wrap place-items-center pb-36 lg:justify-center">
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
        <OurGallery />
      </div>
      <div tw="">
        <ThumbnailVideoTour />
      </div>
      <GetTheQuota />
      <div tw="container w-screen">
        <Footer />
      </div>
    </div>
  </div>
)

export default Gallery
