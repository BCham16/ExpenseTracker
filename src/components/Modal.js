import React from 'react'
import './Modal.css'
import ControlsForm from './ControlsForm'

const Modal = ({open, onFormSubmit}) => {

  if(!open) return null

  return (
    <ControlsForm onFormSubmit={onFormSubmit}/>
  )
}

export default Modal