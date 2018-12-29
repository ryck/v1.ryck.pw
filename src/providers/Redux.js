import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import store from '../store/store'

const Redux = ({ children }) => <Provider store={store}>{children}</Provider>

Redux.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Redux
