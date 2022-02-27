import classes from './expenses.module.css'
import ExpensesDate from './expensesDate';

const Expenses = (props) => {
  console.log(props.children)
  return (
    <div className={classes["expense-item"]}>
      <ExpensesDate date={props.date} />
      <div>
        {props.children}
      </div>
      <div className={classes["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={classes["expense-item__price"]}>${props.amount}</div>
      </div>
    </div>
  )
};

export default Expenses;
