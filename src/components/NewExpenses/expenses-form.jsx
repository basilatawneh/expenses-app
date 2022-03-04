// import classes from 
import React, { useState } from 'react';
import classes from './expenses.module.css';

const ExpensesForm = (props) => {

  const [inputValues, setInputValues] = useState({
    title: '',
    amount: 0,
    date: ''
  });

  const inputsHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInputValues((values) => {
      return {
        ...values,
        [name]: value
      }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddHandler({
      title: inputValues.title,
      amount: inputValues.amount,
      date : new Date(inputValues.date)
    })
    setInputValues({
      title: '',
      amount: 0,
      date: ''
    });
  }


  // const inputsHandler = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   setInputValues({
  //     ...inputValues,
  //     [name]: value
  //   });
  // }

  // const titleHandler = (event) => {
  //   setTitle(event.target.value)
  // }

  // const amountHandler = (event) => {
  //   setAmount(event.target.value);
  // }

  // const dateHandler = (event) => {
  //   setDate(event.target.value);
  // }

  return (
    <form method='' onSubmit={submitHandler}>
      <div className={classes['new-expense__controls']}>
        <div className={classes['new-expense__control']}>
          <label>Title</label>
          <input type='text' name='title' value={inputValues.title} onChange={inputsHandler} />
          {/* <div>{inputValues.title}</div> */}
        </div>
        <div className={classes['new-expense__control']}>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' name='amount' value={inputValues.amount} onChange={inputsHandler} />
          {/* <div>{inputValues.amount}</div> */}
        </div>
        <div className={classes['new-expense__control']}>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' name='date' value={inputValues.date} onChange={inputsHandler} />
          {/* <div>{inputValues.date}</div> */}
        </div>
      </div>
      <div className={classes['new-expense__actions']}>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  )
};

export default ExpensesForm;