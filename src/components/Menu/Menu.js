import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import styled from 'styled-components'
import routes from '../../routing/routes'

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
`

const LinkMenu = styled(Link)`
  display: inline-block;
  padding: 10px;
  margin: 5px;
`
function Menu(props) {
  return (
    <List>
      <li>
        <LinkMenu to={routes.root}> Home </LinkMenu>
      </li>
      <li>
        <LinkMenu to={routes.skills}> Skills </LinkMenu>
      </li>
      <li>
        <LinkMenu to={routes.work}> Work </LinkMenu>
      </li>
    </List>
  )
}

// Menu.propTypes = {}

export default Menu
