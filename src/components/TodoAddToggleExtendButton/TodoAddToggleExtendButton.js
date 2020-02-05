import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Gear} from '../../assets/gear.svg'

const Button = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: 0;
  margin-right: .16rem;
  cursor: pointer;
  &:hover,
  &:focus {
    svg {
      fill: #5897FE;
    }
  }
`

const Icon = styled(Gear)`
  width: 3rem;
  height: 3rem;
  fill: #323639;
  transition: all .2s ease;
`

const TodoAddToggleExtendButton = ({ toggleExtendForm }) => {
  return (
    <Button 
      type="button"
      onClick={toggleExtendForm}
    ><Icon /></Button>
  )
}

export default TodoAddToggleExtendButton
