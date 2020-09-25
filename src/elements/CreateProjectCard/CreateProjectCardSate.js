import React,{useState} from 'react'

function CreateProjectCardSate(initialValues) {
    const [values, setValues] = useState(initialValues);
    const changeHandler = event => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name] : value
        })
    }
    return {
        values,
        setValues,
        changeHandler
    }
}

export default CreateProjectCardSate
