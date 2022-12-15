import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostFiles } from '../../Helpers/post-util'
const PostDetailPage = (props) => {
  const {post} = props
  return <PostContent post={post} />
}

export const getStaticProps = (context) => {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    revalidate: 600
  }
}

export const getStaticPaths = () => {

  const postFileNames = getPostFiles()

  const slugs = postFileNames.map(filename => filename.replace(/\.md$/, ''))
  return {
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: false
  }
}
export default PostDetailPage
