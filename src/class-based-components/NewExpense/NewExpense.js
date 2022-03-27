import React, { Component } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

class NewExpense extends Component {
  saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    this.props.onAddExpense(expenseData);
  };
  render() {
    return (
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={this.saveExpenseDataHandler} />
      </div>
    );
  }
};

// const NewExpense = (props) => {
//   const saveExpenseDataHandler = (enteredExpenseData) => {
//     const expenseData = {
//       ...enteredExpenseData,
//       id: Math.random().toString()
//     };
//     props.onAddExpense(expenseData);
//   };

//   return (
//     <div className='new-expense'>
//       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
//     </div>
//   );
// };

export default NewExpense;
