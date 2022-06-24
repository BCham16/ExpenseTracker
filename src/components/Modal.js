import React from 'react'
import ControlsForm from './ControlsForm'

const Modal = ({open, onFormSubmit}) => {

  if(!open) return 'Expense Tracker'

  return (
    <ControlsForm onFormSubmit={onFormSubmit}/>
  )
}

export default Modal