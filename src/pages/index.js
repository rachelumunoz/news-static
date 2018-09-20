import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  constructor(props){
    super(props)

    console.log("data is ", )

    this.state = {
      imageCounter: 0,
      images : [
        "/img/1.jpeg",
        "/img/2.jpeg",
        "/img/3.jpeg", 
        "/img/4.jpeg", 
        "/img/5.jpeg", 
        "/img/6.jpeg", 
        "/img/7.jpeg", 
        "/img/8.jpeg", 
        "/img/9.jpeg", 
        "/img/10.jpeg", 
        "/img/11.jpeg", 
        "/img/12.jpeg", 
        "/img/13.jpeg", 
        "/img/14.jpeg", 
        "/img/15.jpeg", 
        "/img/16.jpeg", 
        "/img/17.jpeg",
        "/img/18.jpeg",
        "/img/19.jpeg",
        "/img/20.jpeg"   
      ]
    }
  }

  // getNum(){
  //   let counter = this.state.imageCounter;
  //   console.log("the counter is", counter++)

  //   return 0
  // }
  
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
                          src={`${this.state.images[this.state.imageCounter++]}`}
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
      sort: { order: DESC, fields: [frontmatter___date] }
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
