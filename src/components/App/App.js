import React from 'react'
import Todo from '../Todo/Todo'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  background-color: #f6f8f9;
  display: flex;
`

const App = () => {
  return (
    <Container>
      <Todo />
    </Container>
  )
}

export default App
