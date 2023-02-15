import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = '$294.67'
//   const month = props.date.toLocaleString("en-US", { month: "long" });
//   const day = props.date.toLocaleString("en-us", { day: "2-digit" });
//   const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
