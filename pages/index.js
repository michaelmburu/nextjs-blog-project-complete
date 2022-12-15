import FeaturedPosts from '../components/home/featured-posts'
import Hero from '../components/home/hero'
import { getFeaturedPosts } from '../Helpers/post-util'

const HomePage = (props) => {
  const{posts} = props
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  }
}

export default HomePage
