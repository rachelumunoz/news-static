import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../layouts/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="News Proof of Concept" />
    <Navbar />
    <div className="childrenContainer">{children}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
