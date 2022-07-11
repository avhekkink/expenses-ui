import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState('false');

  const clickHandler = () => setDisplayForm('true');

  if (displayForm === 'false') {
    return (
      <div className="new-expense">
        <button type="button" onClick={clickHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  const displayFormHandler = (boolean) => setDisplayForm(boolean);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // not ideal unique id generator, but will do for now
    };
    // console.log('enriched data: ', expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onDisplayForm={displayFormHandler}
      />
    </div>
  );
};

export default NewExpense;
