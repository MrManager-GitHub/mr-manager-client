import React, { useState } from 'react';
import axios from 'axios';

function CreateProjectCardState(initialValues) {
  const [values, setValues] = useState(initialValues);
  const startingDateChangeHandler = date => {
    setValues({
      ...values,
      start_date: date
    });
  }
  const endingDateChangeHandler = date => {
    setValues({
      ...values,
      end_date: date
    });
  }
  const changeHandler = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }
  const submitHandler = () => {
    setValues({
      ...values,
      isLoading: true
    });
    const payload = {
      token: values.token,
      user_id: localStorage.getItem('id'),
      project_name: values.project_name,
      address: values.address,
      city: values.city,
      project_valuation: values.project_valuation,
      area: values.area,
      start_date: values.start_date,
      end_date: values.end_date,
      house: values.house,
      plot: values.plot,
      flat: values.flat,
      shop: values.shop
    };
    console.log(payload);
    axios
      .post('https://ervgglfmyi.execute-api.us-east-1.amazonaws.com/dev/project', payload)
      .then(res => {
        console.log(res.data);
        setValues({
          ...values,
          isLoading: false
        });
      }).catch(err => {
        console.log(err);
        setValues({
          ...values,
          isLoading: false
        });
      });
  }
  return {
    values,
    setValues,
    changeHandler,
    startingDateChangeHandler,
    endingDateChangeHandler,
    submitHandler
  }
}

export default CreateProjectCardState
