import React, { useEffect, useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const API = 'https://expenses-project-2e3d1-default-rtdb.firebaseio.com/expences.json';
  
  const getData = () => {
    fetch(API)
      .then(res => res.json())
      .then(res => {
        const finalExpenses = [];
        for (let expens in res) {
          finalExpenses.push({
            ...res[expens],
            date: new Date(res[expens].date)
          });
        }

        setExpenses(finalExpenses)
      })
  }

  useEffect(() => {
    getData();
  }, []);

  const addExpenseHandler = (expense) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(expense)
    }
    fetch(API, options)
    .then(res => res.json())
    .then(res=>{
      getData();
    })
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
