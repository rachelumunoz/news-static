import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"

import Content, { HTMLContent } from '../components/Content'
import TemplateWrapper from '../components/layout'
import facebookLogo from '../img/facebookLogo.svg'
import twitterLogo from '../img/twitterLogo.svg'
import bitFist from '../img/bitFist.svg'


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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </h1>
        <h2 className="description">
          Tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <div className="bottomLayer">
          <div className="dateAndAuthor">
            <div>Oct 3, 2018 | Caitlin Kenney </div>
          </div>
          <div className="articleType">
            News
          </div>
          <div className="shareButtons">
            <div className="shareFacebook">
              <span><img src={facebookLogo}></img></span>
              Share on Facebook
            </div>
            <div className="shareTwitter">
              <span><img src={twitterLogo}/></span>
              Share on Twitter
            </div>
            <div className="track">
              <span><img src={bitFist}/></span>
              Track the Black Queen
            </div>
          </div>
        </div>
        
       
        <div className="postContent">

          <img src={image}/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus elementum. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ultricies integer quis auctor elit sed vulputate mi sit. Diam donec adipiscing tristique risus nec feugiat. Nisl nisi scelerisque eu ultrices. Convallis tellus id interdum velit. Sed sed risus pretium quam vulputate dignissim suspendisse. Dui vivamus arcu felis bibendum ut. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sed sed risus pretium quam vulputate dignissim suspendisse in. Rutrum quisque non tellus orci ac auctor augue mauris. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.

          Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Maecenas accumsan lacus vel facilisis volutpat est velit. Ornare aenean euismod elementum nisi quis eleifend. Nec feugiat in fermentum posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada. Et malesuada fames ac turpis egestas. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Nam aliquam sem et tortor consequat id porta nibh venenatis. Ac turpis egestas maecenas pharetra. Tempus iaculis urna id volutpat lacus laoreet. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Amet est placerat in egestas erat imperdiet sed euismod. Libero volutpat sed cras ornare arcu dui. Imperdiet dui accumsan sit amet nulla. Tempus iaculis urna id volutpat lacus laoreet non. Commodo odio aenean sed adipiscing diam. Cras ornare arcu dui vivamus arcu felis. Proin fermentum leo vel orci porta non pulvinar.
        </div>
        <div className="shareButtons">
          <div className="shareFacebook">Share on Facebook</div>
          <div className="shareTwitter">Share on Twitter</div>
          <div className="track">Track the Black Queen</div>
        </div>
        <div className="dateAndAuthorBottom">
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
