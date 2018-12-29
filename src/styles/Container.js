import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.mq.lg}) {
    max-width: ${props => props.theme.mq.lg};
  }
`

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Container
