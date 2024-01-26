import tw from 'twin.macro'
import HomeNavButton from '../Button/HomeButton'
import NavButton from '../Button/NavButton'
import PinkButton from '../Button/PinkButton'


const MainMenuBgWhite = () => (
  <div tw="flex flex-row flex-wrap justify-items-end gap-x-12 pl-32 pr-16 max-md:pl-0">
    <HomeNavButton variant="homeButtonBgWhite">
      <a href="/">Home +</a>
    </HomeNavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <a href="/about">About</a>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <a href="/service">Service</a>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <a href="/gallery">Gallery</a>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <a href="/team">Team</a>
    </NavButton>
    <NavButton variant="navButtonBgWhite">
      {' '}
      <a href="/blog">Blog</a>
    </NavButton>
    <PinkButton variant="contact">
      {' '}
      <a href="/contact">Contact</a>
    </PinkButton>
  </div>
)
export default MainMenuBgWhite
