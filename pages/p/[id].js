import Layout from '../../components/MyLayout';
var Prismic = require('prismic-javascript');

const Post = props => (
  <Layout>
    
    {props.post.title.length ? props.post.title.map(entry=> <h1>{entry.text}</h1>) : ""}
    {props.post.body.length ? props.post.body.map(entry=> <p>{entry.text}</p>): ""}

    <style jsx>{`
        p {
          font-family: 'Arial';
        }
        h1 {
          font-family: 'Trebuchet MS';
        }
        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }

        h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>

  </Layout>
);


Post.getInitialProps = async function(context){
  console.log("get props");
   const { id } = context.query;

  const apiEndpoint = 'https://frog-emporium.prismic.io/api/v2';

  let result = await Prismic.getApi(apiEndpoint).then(function(api) {
    console.log(`id nextline`)
    console.log(id);
    return api.getByID(id); // An empty query will return all the documents
  }).then(function(response) {
    return {
        post: response.data
      };
  }, function(err) {
    console.log("Something went wrong: ", err);
  });
  
  return result; 
}


export default Post;