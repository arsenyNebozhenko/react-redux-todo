import React from 'react'
import Header from '../Header/Header'
import Todo from '../Todo/Todo'
import styled from 'styled-components'

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
