import PostItem from './post-item'
import classes from './post-grid.module.css'
const PostGrid = (props) => {
  const { posts } = props
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default PostGrid
