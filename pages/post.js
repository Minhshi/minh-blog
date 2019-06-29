import { withRouter } from 'next/router';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.post.title}</h1>
    <p>{props.post.body}</p>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  console.log(data)

  return {
    post: data
  }
}

export default Post;
