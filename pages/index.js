import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Posts</h1>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    posts: data
  };
};

export default Index;
