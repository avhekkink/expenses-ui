import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";

const Expenses = (props) => {
  let rows = [];
  for (let i = 0; i < props.expenses.length; i++) {
    rows.push(
      <ExpenseItem
        title={props.expenses[i].title}
        amount={props.expenses[i].amount}
        date={props.expenses[i].date}
        key={i}
      ></ExpenseItem>
    );
  }

  return <Card className="expenses">{rows}</Card>;
};

export default Expenses;
