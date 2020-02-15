import Layout from '../components/MyLayout.js'

export default function About() {
  return (
    <Layout>
    <h1>About</h1>
      <p>This app uses Next.Js, React, and Prismic JS SDK to fetch content from the Prismic headless CMS. </p>
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
    
  )
}
