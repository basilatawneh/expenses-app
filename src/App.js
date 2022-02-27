import logo from './logo.svg';
import './App.css';
import Expenses from './components/expenses/expenses';

function App() {
  const expensesArray = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      
      <Expenses
        date={expensesArray[0].date}
        title={expensesArray[0].title}
        amount={expensesArray[0].amount}
      >
      </Expenses>
      <Expenses
        date={expensesArray[1].date}
        title={expensesArray[1].title}
        amount={expensesArray[1].amount}
      >
      </Expenses>
      <Expenses
        date={expensesArray[2].date}
        title={expensesArray[2].title}
        amount={expensesArray[2].amount}
      >
      </Expenses>
      <Expenses
        date={expensesArray[3].date}
        title={expensesArray[3].title}
        amount={expensesArray[3].amount}
      >
      </Expenses>
      {/* <Expenses></Expenses>
        <Expenses></Expenses>
        <Expenses></Expenses> */}
    </div>
  );
}

export default App;
