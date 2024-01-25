import GetTheQuota from '../components/Gallery/GetTheQuota'
import OurGallery from '../components/Gallery/OurGallery'
import ThumbnailVideoTour from '../components/Gallery/ThumbnailVideoTour'
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
