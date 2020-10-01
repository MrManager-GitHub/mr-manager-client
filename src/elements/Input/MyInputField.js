import React from 'react'
import { TextField } from '@material-ui/core'

const MyInputField = props => {
  return (
    <div>
      <TextField type={props.type} color={props.color} fullWidth={true} onChange={props.change} value={props.value} label={props.label} name={props.name} autoComplete="off" required />
    </div>
  )
}

export default MyInputField
