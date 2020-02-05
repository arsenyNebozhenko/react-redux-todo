import React from 'react'
import styled from 'styled-components'

import TodoAddForm from './TodoAddForm'
import TodoList from './TodoList'
import TodoFilterForm from './TodoFilterForm'

const Container = styled.div`
  max-width: 1028px;
  width: 100%;
  margin: auto;
  padding: 1rem;
  border-radius: 3px;
`

const Todo = () => {
  return (
    <Container>
      <TodoAddForm />
      <TodoList />
      <TodoFilterForm />
    </Container>
  )
}

export default Todo
