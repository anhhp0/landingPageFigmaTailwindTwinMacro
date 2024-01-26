import tw, { styled } from 'twin.macro'

import TextTitle from '../TextTile/Title'
import FbWhiteBgIcon from '../Socialicons/FbWhiteBg'
import TwitterWhiteBgIcon from '../Socialicons/TwitterWhiteBg'
import InstagramWhiteBgIcon from '../Socialicons/InstagramWhiteBg'
import LinkedinWhiteBgIcon from '../Socialicons/LinkedinWhiteBg'

const SocialConnect = () => (
  <div tw="flex flex-col gap-16">
    <div tw="flex bg-white w-[350px] h-[231px] rounded-[25px] drop-shadow-[0px 25px 50px rgba(246, 247, 255, 1)]">
      <div tw="flex flex-col gap-8 justify-center mx-8">
        <TextTitle variant="title" tw="text-[#091156] ">
          Social Connect
        </TextTitle>
        <div tw="flex flex-row [margin-left: -16px]">
          <FbWhiteBgIcon />
          <TwitterWhiteBgIcon />
          <InstagramWhiteBgIcon />
          <LinkedinWhiteBgIcon />
        </div>
      </div>
    </div>
  </div>
)

export default SocialConnect
