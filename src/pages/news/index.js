import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"

import TemplateWrapper from '../../components/layout'


export default class NewsPage extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { data } = this.props

    if (data.allMarkdownRemark === null){
      return <h1>empty</h1>
    } else {
      
      const { edges: posts } = data.allMarkdownRemark 
    return (
      <TemplateWrapper>
        <section className="section">
          <div className="container">
            <div className="content grid">
              <h1 className="has-text-weight-bold is-size-2">News</h1>
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
                            src={`${post.frontmatter.image}`}
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
      </TemplateWrapper>
    )
    }

    console.log("this is the data", data)
    
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
      filter: { frontmatter: { postType: { eq: "news" } }}
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
            image
            date(formatString: "MMMM DD, YYYY")
            
          }
        }
      }
    }
  }
`
