import Layout from '../layout/layout'
import BlogSite from '../components/BlogSite/BlogSite'
import BlogThumbnail from '../components/BlogSite/BlogThumbnail'

const Blog = () => {
  return (
    <Layout>
      <BlogThumbnail />
      <BlogSite />
    </Layout>
  )
}

export default Blog
