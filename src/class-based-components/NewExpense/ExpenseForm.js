import React, { Component, useState } from 'react';

import './ExpenseForm.css';
class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    };
  }

  titleChangeHandler = (event) => {
    this.setState({ enteredTitle: event.target.value });
  };

  amountChangeHandler = (event) => {
    this.setState({ enteredAmount: event.target.value });
  };

  dateChangeHandler = (event) => {
    this.setState({ enteredDate: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: this.state.enteredTitle,
      amount: this.state.enteredAmount,
      date: new Date(this.state.enteredDate),
    };

    this.props.onSaveExpenseData(expenseData);
    this.setState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    })
  };
  // componentDidMount() { /// useEffect(() => {}, [])
  //   console.log("componentDidMount")
  // }
  // componentDidUpdate(prevProps, prevState){ // useEffect(()=>{}, [someValues])
  //   if(prevState.enteredTitle !== this.state.enteredTitle) {
  //     console.log("titleChanged")
  //   }
  //   console.log("componentDidUpdate")
  // }
  // componentWillUnmount() {// useEffect(()=>{ return () => {}}, [someValues])
  //   console.log("componentWillUnmount")
  // }
  render() {
    return (
      <form onSubmit={this.submitHandler} >
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={this.state.enteredTitle}
              onChange={this.titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={this.state.enteredAmount}
              onChange={this.amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={this.state.enteredDate}
              onChange={this.dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  }
};
// const ExpenseForm = (props) => {
//   const [enteredTitle, setEnteredTitle] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: '',
//   //   enteredAmount: '',
//   //   enteredDate: '',
//   // });

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredTitle: event.target.value,
//     // });
//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredAmount: event.target.value,
//     // });
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredDate: event.target.value,
//     // });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const expenseData = {
//       title: enteredTitle,
//       amount: enteredAmount,
//       date: new Date(enteredDate),
//     };

//     props.onSaveExpenseData(expenseData);
//     setEnteredTitle('');
//     setEnteredAmount('');
//     setEnteredDate('');
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//           <label>Title</label>
//           <input
//             type='text'
//             value={enteredTitle}
//             onChange={titleChangeHandler}
//           />
//         </div>
//         <div className='new-expense__control'>
//           <label>Amount</label>
//           <input
//             type='number'
//             min='0.01'
//             step='0.01'
//             value={enteredAmount}
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className='new-expense__control'>
//           <label>Date</label>
//           <input
//             type='date'
//             min='2019-01-01'
//             max='2022-12-31'
//             value={enteredDate}
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//       </div>
//     </form>
//   );
// };

export default ExpenseForm;
