import tw, { styled } from 'twin.macro'

import TextTitle from '../textTile/Title'
import FbWhiteBgIcon from '../socialicons/fbWhiteBg'
import TwitterWhiteBgIcon from '../socialicons/twitterWhiteBg'
import InstagramWhiteBgIcon from '../socialicons/instagramWhiteBg'
import LinkedinWhiteBgIcon from '../socialicons/linkedinWhiteBg'


const SocialConnect = () => (
  <div tw="flex flex-col gap-16">
    <div tw="flex bg-white w-[350px] h-[231px] rounded-[25px] drop-shadow-[0px 25px 50px rgba(246, 247, 255, 1)]">
      <div tw="flex flex-col gap-8 justify-center mx-8">
        <TextTitle variant="title" tw="text-[#091156] ">
          Social Connect
        </TextTitle>
        <div tw='flex flex-row [margin-left: -16px]'>
          <FbWhiteBgIcon />
          <TwitterWhiteBgIcon />
          <InstagramWhiteBgIcon />
          <LinkedinWhiteBgIcon/>
       </div>
      </div>
    </div>
  </div>
)

export default SocialConnect
