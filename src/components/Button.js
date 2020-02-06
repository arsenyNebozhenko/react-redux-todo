import React from 'react'
import styled from 'styled-components'

import { colorMap } from '../utils'

const Container = styled.button`
  line-height: 0;
  width: 64px;
  height: 64px;
  font-size: 2rem;
  color: ${props => colorMap[props.status]};
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const Button = ({ children, ...attrs }) => <Container {...attrs}>{children}</Container>

export default Button
