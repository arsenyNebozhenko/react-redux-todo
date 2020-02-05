import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { 
  displayItemsByImportance 
} from '../actions/todosActions'
import { 
  updateFilterFormValue 
} from '../actions/todoFilterFormActions'

const Container = styled.form`
  display: flex;
`

const Title = styled.h4`
  font-size: 2rem;
  margin-right: 1rem;
`

const Select = styled.select`
  font-size: 2rem;
`

const TodoFilterForm = ({ value, updateFilterFormValue, displayItemsByImportance }) => {
  useEffect(() => {
    displayItemsByImportance(value)
  }, [displayItemsByImportance, value])

  const handleChange = ({ target: { value}}) => {
    updateFilterFormValue(value)
    displayItemsByImportance(value)
  }

  return (
    <Container>
      <Title>Show</Title>
      <Select
        value={value} 
        onChange={handleChange}
      >
        <option value="all">all</option>
        <option value="important">important</option>
        <option value="regular">regular</option>
        <option value="not important">not important</option>
      </Select>
    </Container>
  )
}

const mapStateToProps = ({ todoFilterForm: { value } }) => ({
  value
})

const actions = {
  displayItemsByImportance,
  updateFilterFormValue
}

export default connect(mapStateToProps, actions)(TodoFilterForm)
