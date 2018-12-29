import React from 'react'
import PropTypes from 'prop-types'
import Theme from './Theme'

const Provider = ({ children }) => <Theme>{children}</Theme>

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Provider
