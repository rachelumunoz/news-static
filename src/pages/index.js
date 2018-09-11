import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log("data", data)
    console.log("edges", posts);
        
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Live Music News</h1>
          </div>
          <div className="grid-container">
            {posts
              .map(({ node: post }) => (
                <div
                  className="grid-cell"
                  style={{ border: '1px solid #eaecee'}}
                  key={post.id}
                >
                  <div
                    className="cell-content"                  
                  >
                    <div className="dynamic">
                    
                      <Link to={post.fields.slug}>
                        <img 
                          src="https://picsum.photos/430/325/?random"
                          />
                      </Link>
                      
                      <div
                        className="article-title"
                      >
                        <p>
                          <Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                          <br/>
                          <small>{post.frontmatter.date}</small>
                        </p>
                      </div>
                      
                      <br/>
                      <br/>
                    
                      <div
                        className="post-container"
                      >
                        <p
                          className="post-excerpt"
                        >
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    
                  </div>
                </div>
              ))}
            </div>
        </div>
        <br/>
        <br/>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "article-post" } }}
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
            tags
          }
        }
      }
    }
  }
`
