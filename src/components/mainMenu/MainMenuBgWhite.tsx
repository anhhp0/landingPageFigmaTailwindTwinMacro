import tw from "twin.macro";
import HomeNavButton from "../button/HomeButton";
import NavButton from "../button/NavButton";
import PinkButton from "../button/PinkButton";

const MainMenuBgWhite = () => (

    <div tw="flex flex-row flex-wrap justify-items-end gap-x-16 pl-32 pr-16">
      <HomeNavButton variant="homeButtonBgWhite">Home +</HomeNavButton>
      <NavButton variant="navButtonBgWhite">About</NavButton>
      <NavButton variant="navButtonBgWhite">Service</NavButton>
      <NavButton variant="navButtonBgWhite">Gallery</NavButton>
      <NavButton variant="navButtonBgWhite">Blog</NavButton>
      <PinkButton variant="contact">Contact</PinkButton>
    </div>
)
export default MainMenuBgWhite