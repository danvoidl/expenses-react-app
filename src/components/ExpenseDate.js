import "./ExpenseDate.css";

function ExpenseDate({ date = new Date() }) {
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.toLocaleString("en-us", { month: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate
