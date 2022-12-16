import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import classes from './post-content.module.css'
import PostHeader from './post-header'

const PostContent = (props) => {
  const { post } = props
  const imagePath = `/images/posts/${post.image}`

  const customRenderers = {
    code(code) {
      const { language, children } = code
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
