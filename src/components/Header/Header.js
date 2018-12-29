import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'
import routes from '../../routing/routes'
import Menu from '../Menu'
import logo from '../../assets/jinlabs_logo.png'

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 70px;
  width: 100%;
  position: sticky;
  margin: 10px 0;
  border: 2px solid ${props => props.theme.color.yellow};
  top: 10px;
  background: white;
  box-shadow: 0 4px 3px -2px rgba(0, 0, 0, 0.2);
`

const LogoLink = styled(Link)`
  height: 100%;
  text-decoration: none;
  display: block;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

const LogoImg = styled.img`
  height: 100%;
`

const Header = () => (
  <Container>
    <LogoLink to={routes.root}>
      <LogoImg src={logo} />
    </LogoLink>
    <Menu />
  </Container>
)

// Header.propTypes = {}

export default Header
