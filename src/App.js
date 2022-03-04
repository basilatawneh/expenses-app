import logo from './logo.svg';
import './App.css';

import Expenses from './components/Expenses/Expenses';
import ExpensesForm from './components/NewExpenses/expenses-form';
import { useState } from 'react';

function App() {
  const [expensesArray, setExpensesArray] = useState([]);
  const onAddHandler = (item) => {
    setExpensesArray((prev) => {
      return [...prev, item]
    })
  }
  
  return (
    <div >
      <ExpensesForm onAddHandler={onAddHandler} />
      <Expenses items={expensesArray} />
    </div>
  );
}

export default App;
