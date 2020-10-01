import React, { useState } from 'react'

function CreatePurchaseOrderCardState(initialValues) {
  const [values, setValues] = useState(initialValues);
  const changeHandler = event => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  }
  return {
    values,
    setValues,
    changeHandler
  }
}

export default CreatePurchaseOrderCardState
