import tw from 'twin.macro'
import React from 'react'
import Thumbnail from './unsplash_LRXYS0tSyGc.svg'

const ThumbnailAboutUs: React.FC = () => {
  return (
    <div tw="flex px-16 mx-auto">
      <img src={ Thumbnail} />
    </div>
  )
}
export default ThumbnailAboutUs
