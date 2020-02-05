import React from 'react'
import styled from 'styled-components'

import TodoAddForm from '../TodoAddForm/TodoAddForm'
import TodoList from '../TodoList/TodoList'
import TodoFilterForm from '../TodoFilterForm/TodoFilterForm'

const Container = styled.div`
  max-width: 1028px;
  width: 100%;
  margin: auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 16px .3rem #D1D5DA;
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
