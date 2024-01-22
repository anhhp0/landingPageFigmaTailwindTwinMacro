import tw, { styled } from 'twin.macro'
import TextTitle from '../textTile/Title'
import GalleryImg1 from './assets/unsplash_FVh_yqLR9eA.svg'
import GalleryImg2 from './assets/unsplash_3ewkNkfJj2k.svg'
import GalleryImg3 from './assets/unsplash_xayCTz6N2nM.svg'
import GalleryImg4 from './assets/unsplash_Pe9IXUuC6QU.svg'
import GalleryImg5 from './assets/unsplash_fvInY-Gh7sc.svg'
import GalleryImg6 from './assets/unsplash_HEde-a_T4E8.svg'
import GalleryImg7 from './assets/unsplash_9Wa1HgE1XlA.svg'
import GalleryImg8 from './assets/unsplash_PqyzuzFiQfY.svg'
import GalleryImg9 from './assets/unsplash_4SUyx4KQ5Ik.svg'






const OurGallery = () => (
  <div tw="flex flex-col w-full justify-center gap-y-4">
    {/* Title  */}
    <div tw="flex flex-row flex-wrap gap-x-64 max-md:w-screen">
      <div tw="flex flex-col gap-3">
        <TextTitle variant="title">Our Gallery</TextTitle>
        <TextTitle variant="slogan">
          Check out the collection pictures
          <br /> from our clinic
        </TextTitle>
      </div>
      <div tw="self-center right-0">
        {' '}
        <TextTitle variant="desc">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit ut aliquam, purus sit amet
          <br /> luctus venenatis
        </TextTitle>
      </div>
    </div>
    {/* img  */}

    <div tw="flex flex-row gap-20 mr-1">
      <div tw="flex flex-col gap-20">
        <img src={GalleryImg1} />
        <img src={GalleryImg4} />
        <img src={GalleryImg7} />
      </div>
      <div tw="flex flex-col gap-20">
        <img src={GalleryImg2} />
        <img src={GalleryImg5} />
        <img src={GalleryImg8} />
      </div>
      <div tw="flex flex-col gap-20 max-md:hidden">
        <img src={GalleryImg3} />
        <img src={GalleryImg6} />
        <img src={GalleryImg9} />
      </div>
    </div>
    {/* img  */}
    <TextTitle variant="desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
      <br /> purus sit amet luctus venenatis, lectus magna fringilla urna,
      porttitor
      <br /> rhoncus dolor purus non enim,{' '}
      <span tw="[font-weight: 600] text-[#091156]">our teams.</span>
    </TextTitle>

    {/* image  */}
  </div>
)
export default OurGallery