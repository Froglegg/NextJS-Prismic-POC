var Prismic = require('prismic-javascript');

import Layout from '../components/MyLayout';
import Link from 'next/link';

const Index = props => (
  <Layout>
    <h1>Prismic Blog Posts</h1>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.data.title[0].text}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const apiEndpoint = 'https://frog-emporium.prismic.io/api/v2';

  let result = await Prismic.getApi(apiEndpoint).then(function(api) {
    return api.query(
      Prismic.Predicates.at('document.type', 'blog_post'),
      { orderings : '[my.blog_post.date desc]' }
    ); 
  }).then(function(response) {
    console.log("Documents: ", response);
    return {
        posts: response.results.map(entry => entry)
      };
  }, function(err) {
    console.log("Something went wrong: ", err);
  });

  return result; 

};

export default Index;

