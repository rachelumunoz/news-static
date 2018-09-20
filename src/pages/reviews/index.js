import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class ReviewsPage extends React.Component {
  constructor(props){
    super(props)

    console.log("data is ", )

    this.state = {
      imageCounter: 0,
      images : [
        "/img/6.jpeg", 
        "/img/7.jpeg", 
        "/img/8.jpeg", 
        "/img/9.jpeg", 
        "/img/10.jpeg", 
        "/img/1.jpeg",
        "/img/2.jpeg",
        "/img/14.jpeg", 
        "/img/15.jpeg", 
        "/img/16.jpeg", 
        "/img/17.jpeg",
        "/img/3.jpeg", 
        "/img/4.jpeg", 
        "/img/5.jpeg", 
        "/img/11.jpeg", 
        "/img/12.jpeg", 
        "/img/13.jpeg", 
        "/img/18.jpeg",
        "/img/19.jpeg",
        "/img/20.jpeg"   
      ]
    }
  }
  
  
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log("edges", posts);

    
    return (
      <section className="section">
        <div className="container">
          <div className="content grid">
            <h1 className="has-text-weight-bold is-size-2">Reviews</h1>
          </div>
         
          {posts
            .map(({ node: post }) => (
              
              <div
                className="content news-post"
                style={{ border: '1px solid #eaecee'}}
                key={post.id}
              >
                <div className="news-cell">
                
                  <div className="left-side">
                    <Link 
                      className="cell-link"
                      to={post.fields.slug}
                    >
                        <img className="news-image"
                          src={`${this.state.images[this.state.imageCounter++]}`}
                          />
                    </Link>
                  </div>
                  <div className="right-side">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <div>
                      <p>
                        {post.excerpt}
                      </p>
                    </div>
                    <span> {post.frontmatter.date} </span>

                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

ReviewsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ReviewsQuery {
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
