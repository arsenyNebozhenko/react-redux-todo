import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { deleteItem, detectItemsFailure, setItemProp } from '../actions/todosActions'

import TodoItem from './TodoItem'

const Container = styled.ul`
  margin-bottom: .5rem;
`

const TodoList = ({ 
    todos, 
    deleteItem, 
    detectItemsFailure, 
    setItemProp 
  }) => {

  useEffect(() => {
    detectItemsFailure()
    setInterval(() => {
      detectItemsFailure()
    }, 300)
  }, [detectItemsFailure])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const children = todos.map((todo, index) => (
    <TodoItem 
      key={index} 
      todo={todo}
      deleteItem={deleteItem} 
      detectItemsFailure={detectItemsFailure}
      setItemProp={setItemProp}
    />
  ))

  return <Container>{children}</Container>
}

const mapStateToProps = ({ todos }) => ({
  todos
})

const actions = {
  deleteItem,
  detectItemsFailure,
  setItemProp
}

export default connect(mapStateToProps, actions)(TodoList)
