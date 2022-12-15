import classes from '../'
import AllPosts from '../../components/posts/all-posts'
import {getAllPosts} from  '../../Helpers/post-util'

const AllPostsPage = (props) => {
  const {posts} = props
  return <AllPosts posts={posts} />
}

export const getStaticProps = () => {
  const allPosts = getAllPosts()

  return{
    props:{
      posts: allPosts
    }
  }
}

export default AllPostsPage
