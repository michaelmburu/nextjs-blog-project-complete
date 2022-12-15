import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './post-item.module.css'
const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const imagePath = `/images/posts/${slug}/${image}`
  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.Image}>
          <Image src={imagePath} alt={title} width={400} height={300} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}
export default PostItem
