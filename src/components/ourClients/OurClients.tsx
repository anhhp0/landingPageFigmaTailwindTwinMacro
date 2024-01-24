import tw from 'twin.macro'
import TextTitle from '../textTile/Title'
import BlitzLogo from './blitzLogo'
import KzArtistLogo from './kzArtistLogo'
import CircleLogo from './circleLogo'
import GeorgeLogo from './georgeLogo'
import AmandaLogo from './amandaLogo'


const OurClients = () => (
  <div tw="flex flex-col justify-center gap-y-4 mx-auto [text-align: center] ">
    <div tw="flex flex-col flex-wrap gap-2 my-auto mx-4">
      <TextTitle variant="title">Our Clients</TextTitle>
      <TextTitle variant="slogan">Well-known agencies</TextTitle>
      <TextTitle variant="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </TextTitle>
    </div>

    <div tw="flex flex-wrap justify-center gap-4">
      <BlitzLogo />
      <KzArtistLogo />
      <CircleLogo />
      <GeorgeLogo />
      <AmandaLogo />
    </div>
  </div>
)
export default OurClients
