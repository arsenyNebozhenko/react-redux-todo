import React from 'react'
import styled from 'styled-components'

import { 
  capitalize 
} from '../../utils'

const Select = styled.select`
  font-size: 2rem;
  padding-left: .5rem;
  padding-right: .5rem;
  width: 100%;
  max-width: 256px;
  margin-right: .16rem;
  width: 50%;
  font-size: 1.25em;
`

const Input = styled.input`
  font-size: 2rem;
  padding-left: .5rem;
  padding-right: .5rem;
  width: 100%;
  max-width: 256px;
  margin-right: .16rem;
  font-size: 1.5rem;
`

const TodoAddInput = ({ name, value, updateFormValue }) => {
  const handleChange = ({ target: { name, value} }) => {
    updateFormValue(name, value)
  }

  switch (name) {
    case 'importance':
      return (
        <Select 
          name={name}
          onChange={handleChange}
        >
          <option value="important">important</option>
          <option value="regular">regular</option>
          <option value="not important">not important</option>
        </Select>
      )
    default:
      return (   
        <Input 
          required={name === 'title'}
          type={name === 'dateExpires' ? 'datetime-local' : 'text'}
          placeholder={capitalize(name)}
          name={name}
          value={value}
          onChange={handleChange}
        />
    )
  }
}

export default TodoAddInput
