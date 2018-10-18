import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"

import Content, { HTMLContent } from '../components/Content'
import TemplateWrapper from '../components/layout'
import facebookLogo from '../img/facebookLogo.svg'
import twitterLogo from '../img/twitterLogo.svg'
import bitFistWhite from '../img/bitFistWhite.svg'


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
      <div className="postContainer">
        <h1 className="title">
          {title} !!
        </h1>
        <h2 className="description">
          {description} !!
        </h2>
        <div className="dateAndAuthor">
          Oct 3, 2018 | Caitlin Kenney
        </div>
        <div className="articleTypeContainer">
          <div className="articleType">
            News
          </div>
        </div>
        <div className="shareButtons">
            <div className="shareFacebook item">
              <span><img src={facebookLogo}></img></span>
              <span>Share on Facebook</span>
            </div>
            <div className="shareTwitter item">
              <span><img src={twitterLogo}/></span>
              <span>Share on Twitter</span>
            </div>
            <div className="track item">
              <span><img src={bitFistWhite}/></span>
              <span>Track the Black Queen</span>
            </div>
          </div>
        <PostContent content={content} />
        <div className="shareButtons">
            <div className="shareFacebook item">
              <span><img src={facebookLogo}></img></span>
              <span>Share on Facebook</span>
            </div>
            <div className="shareTwitter item">
              <span><img src={twitterLogo}/></span>
              <span>Share on Twitter</span>
            </div>
            <div className="track item">
              <span><img src={bitFistWhite}/></span>
              <span>Track the Black Queen</span>
            </div>
          </div>
        <div className="dateAndAuthor">
            <div>Oct 3, 2018 | Caitlin Kenney </div>
        </div>
      </div>
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
