import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"

import Content, { HTMLContent } from '../components/Content'
import TemplateWrapper from '../components/layout'

export const PostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  image,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <TemplateWrapper>  
      <section className="bodyContainer">
        {helmet || ''}
        <div className="">
          <div className="">
            <div className="">
              <h1 className="title">
                {title}
              </h1>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <br/>

        </div>
      </section>
    </TemplateWrapper>
  )
}

PostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      helmet={ 
        <Helmet>
          <title> {post.frontmatter.title} </title>
          <meta name="description" content={post.frontmatter.description}></meta>
        </Helmet>
      }
    />
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Post

export const pageQuery = graphql`
  query PostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image
      }
    }
  }
`
