import GetTheQuota from '../components/GallerySite/GetTheQuota'
import OurGallery from '../components/GallerySite/OurGallery'
import ThumbnailVideoTour from '../components/GallerySite/ThumbnailVideoTour'
import Layout from '../layout/layout'

const Gallery = () => {
  return (
    <Layout>
      <OurGallery />
      <ThumbnailVideoTour />
      <GetTheQuota />
    </Layout>
  )
}

export default Gallery
