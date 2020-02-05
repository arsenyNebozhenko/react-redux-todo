import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  background-color: #222;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
`

const Header = () => {
  return (
    <Container>
      <Title>Todo</Title>
    </Container>
  )
}

export default Header
