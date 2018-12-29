import React from 'react'
import PropTypes from 'prop-types'
import Theme from './Theme'
import Redux from './Redux'

const Provider = ({ children }) => (
  <Redux>
    <Theme>{children}</Theme>
  </Redux>
)

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Provider
