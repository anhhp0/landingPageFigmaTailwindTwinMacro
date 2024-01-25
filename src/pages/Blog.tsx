import Layout from '../layout'
import BlogSite from '../components/Blog/BlogSite'
import BlogThumbnail from '../components/Blog/BlogThumbnail'

const Blog = () => {
  return (
    <Layout>
      <BlogThumbnail />
      <BlogSite />
    </Layout>
  )
}

export default Blog
