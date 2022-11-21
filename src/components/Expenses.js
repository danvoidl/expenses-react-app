import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses = [] }) {
  return (
    <div className="expenses">
      <ExpenseItem
        amount={expenses[0].amount}
        date={expenses[0].date}
        title={expenses[0].title}
      ></ExpenseItem>
  
      <ExpenseItem
        amount={expenses[1].amount}
        date={expenses[1].date}
        title={expenses[1].title}
      ></ExpenseItem>
  
      <ExpenseItem
        amount={expenses[2].amount}
        date={expenses[2].date}
        title={expenses[2].title}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses