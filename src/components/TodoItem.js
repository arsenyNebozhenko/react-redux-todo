import React from 'react'
import styled from 'styled-components'

import Button from './Button'

import { 
  getFormattedDate, 
  isValidDate 
} from '../utils'

const Container = styled.li`
  display: ${props => props.isHidden ? 'none' : 'flex'};
  justify-content: space-between;
  align-items: center;
  margin-bottom: .25rem;
  min-height: 4rem;
  color: ${props => props.status === 'completed' ? 'green' : props.status === 'failed' ? '#eb503c' : 'black'};
`

const Text = styled.div`
  flex-grow: 1;
  margin-right: .5rem;
  display: flex;
  flex-direction: column;
`

const Title = styled.input`
  background-color: transparent;
  font-size: 2rem;
  border: 0;
  color: ${props => props.status === 'completed' ? 'green' : props.status === 'failed' ? '#eb503c' : 'black'};
`

const Description = styled.input`
  background-color: transparent;
  border: 0;
  font-size: 1.25rem;
  color: ${props => props.status === 'completed' ? 'green' : props.status === 'failed' ? '#eb503c' : 'black'};
`

const DatesList = styled.ul`
  margin-right: .5rem;
  display: flex;
  flex-direction: column;
`

const DateItem = styled.li`
  line-height: 1;
  font-size: 1.1rem;
  &:not(:last-child) {
    margin-right: .25rem;
  }
`

const TodoItem = ({ todo: { id, title, description, dateAdded, dateExpires, dateCompleted, status, isHidden }, deleteItem,  setItemProp }) => {
  const handleToggleButtonClick = () => {
    if (status === 'completed') {
      setItemProp(id, 'dateCompleted', null)
    } else {
      setItemProp(id, 'dateCompleted', new Date())
    }
    setItemProp(id, 'status', status === 'active' ? 'completed' : status === 'completed' ? 'active' : 'completed')
  }
  
  return (
    <Container isHidden={isHidden} status={status}>
      <Button onClick={handleToggleButtonClick} status={status}>&#10004;</Button>
      <Text>
        <Title 
          status={status}
          autoComplete="off"
          type="text" 
          name="title" 
          value={title} 
          onChange={({ target: { name, value }}) => setItemProp(id, name, value)} 
        />
        {description && 
          <Description
            status={status} 
            autoComplete="off"
            type="text" 
            name="description" 
            value={description} 
            onChange={({ target: { name, value }}) => setItemProp(id, name, value)} 
          />
        }
      </Text>
      <DatesList>
        <DateItem>Added: {getFormattedDate(dateAdded)}</DateItem>
        {isValidDate(dateExpires) && <DateItem>Expires: {getFormattedDate(dateExpires)}</DateItem>}
        {dateCompleted && <DateItem>Completed: {getFormattedDate(dateCompleted)}</DateItem>}
      </DatesList>
      <Button onClick={() => deleteItem(id)}>&times;</Button>
    </Container>
  )
}

export default TodoItem
