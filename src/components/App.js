import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Todo from './Todo'

const Container = styled.div`
  height: 100%;
  background-color: #f6f8f9;
`

const App = () => {
  return (
    <Container>
      <Header />
      <Todo />
    </Container>
  )
}

export default App
