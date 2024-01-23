import tw from 'twin.macro'
import React from 'react'
import ThumbnailAboutUs1 from './assets/unsplash_LRXYS0tSyGc.svg'

const ThumbnailAboutUs: React.FC = () => {
  return (
    <div tw="flex px-16 mx-auto">
      <img src={ThumbnailAboutUs1} />
    </div>
  )
}
export default ThumbnailAboutUs
