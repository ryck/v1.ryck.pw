import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import Router from '../routing/Router'
import Header from './Header/Header'
import Wrapper from '../styles/Container'

const Container = styled.div`
  position: relative;
`

const Layout = () => (
  <Container>
    <Wrapper>
      <Header />
      <Router />
      <footer>Footer</footer>
    </Wrapper>
  </Container>
)

// Layout.propTypes = {

// }

export default Layout
