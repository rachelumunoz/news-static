import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class NewsPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {counter:0}
  }
  
  increaseCount() {
    console.log("counter increased");;
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log("edges", posts);

    
    return (
      <section className="section">
        <div className="container">
          <div className="content grid">
            <h1 className="has-text-weight-bold is-size-2">Latest News</h1>
          </div>
         
          {posts
            .map(({ node: post }) => (
              
              <div
                className="content news-post"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <div
                  className={
                    this.state.counter++ % 2 === 0 ? "dynamic-grid-spread something" : "dynamic-grid-column something"
                 }
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          }

        </div>
      </section>
    )
  }
}

NewsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) { 
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            
          }
        }
      }
    }
  }
`
