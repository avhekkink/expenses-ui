import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // prevent default behaviour
    event.preventDefault();

    // save the user input data
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // clear the input fields on submit
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');

    // access the prop function to change the state variable 'displayForm' from true to false in 'NewExpense.js' so that it can close the input form
    props.onDisplayForm('false');
  };

  const cancelClickHandler = () => {
    // clear input fields on click
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');

    // access the prop function to change the state variable 'displayForm' from true to false in 'NewExpense.js' so that it can close the input form
    props.onDisplayForm('false');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <div className="new-expense__buttons">
          <button type="button" onClick={cancelClickHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
