import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import Router from '../routing/Router'
import Header from './Header/Header'

const Container = styled.div`
  padding-top: 94px;
  position: relative;
`

const Layout = () => (
  <Container>
    <Header />
    <Router />
    <footer>Footer</footer>
  </Container>
)

// Layout.propTypes = {

// }

export default Layout
