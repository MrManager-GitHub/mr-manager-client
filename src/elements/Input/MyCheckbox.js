import React from 'react'
import {FormControl,FormControlLabel,Checkbox} from '@material-ui/core'
function MyCheckbox(props) {
    const { name, label, value, onChange } = props;
    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
        <div>
            <FormControlLabel label={label} control={<Checkbox checked={value} color="primary" onChange={event => onChange(convertToDefEventPara(name,event.target.checked))} name={name} />} />
        </div>
    )
}

export default MyCheckbox
