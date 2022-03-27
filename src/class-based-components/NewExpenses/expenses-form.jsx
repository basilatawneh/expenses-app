// import classes from 
import React, { Component, useState } from 'react';
import classes from './expenses.module.css';


class ExpensesForm extends Component {
  constructor() {
    super();
    this.state({
      inputValues: {
        title: '',
        amount: 0,
        date: ''
      },
      isOpend: true
    });
  }

  inputsHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState((values) => {
      return {
        inputValues: { ...values.inputValues, [name]: value }
      }
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: this.inputValues.title,
      amount: this.inputValues.amount,
      date: new Date(this.inputValues.date)
    };

    this.props.onAddHandler(expenseData);

    this.setState({
      inputValues: {
        title: '',
        amount: 0,
        date: ''
      }
    });
  }

  render() {
    console.log("ClassBased form")
    return (
      <form method='' onSubmit={this.submitHandler}>
        <div className={classes['new-expense__controls']}>
          <div className={classes['new-expense__control']}>
            <label>Title</label>
            <input type='text' name='title' value={this.state.inputValues.title} onChange={this.inputsHandler} />
          </div>
          <div className={classes['new-expense__control']}>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' name='amount' value={this.state.inputValues.amount} onChange={this.inputsHandler} />
          </div>
          <div className={classes['new-expense__control']}>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' name='date' value={this.state.inputValues.date} onChange={this.inputsHandler} />
          </div>
        </div>
        <div className={classes['new-expense__actions']}>
          <button type='submit' >Add Expense</button>
        </div>
      </form>
    )
  }
}
// const ExpensesForm = (props) => {

//   const [inputValues, setInputValues] = useState({
//     title: '',
//     amount: 0,
//     date: ''
//   });

//   const inputsHandler = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;

//     setInputValues((values) => {
//       return {
//         ...values,
//         [name]: value
//       }
//     })
//   }

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const xyz = {
//       title: inputValues.title,
//       amount: inputValues.amount,
//       date: new Date(inputValues.date)
//     };

//     props.onAddHandler(xyz);
//     setInputValues({
//       title: '',
//       amount: 0,
//       date: ''
//     });
//   }

//   return (
//     <form method='' onSubmit={submitHandler}>
//       <div className={classes['new-expense__controls']}>
//         <div className={classes['new-expense__control']}>
//           <label>Title</label>
//           <input type='text' name='title' value={inputValues.title} onChange={inputsHandler} />
//         </div>
//         <div className={classes['new-expense__control']}>
//           <label>Amount</label>
//           <input type='number' min='0.01' step='0.01' name='amount' value={inputValues.amount} onChange={inputsHandler} />
//         </div>
//         <div className={classes['new-expense__control']}>
//           <label>Date</label>
//           <input type='date' min='2019-01-01' max='2022-12-31' name='date' value={inputValues.date} onChange={inputsHandler} />
//         </div>
//       </div>
//       <div className={classes['new-expense__actions']}>
//         <button type='submit' >Add Expense</button>
//       </div>
//     </form>
//   )
// };

export default ExpensesForm;