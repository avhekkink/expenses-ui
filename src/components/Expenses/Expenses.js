import { useState } from 'react';

import Card from '../UI/Card/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    console.log(
      '(In Expenses.js), selected year to filter by is: ',
      selectedYear
    );
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const expenseYear = expense.date.toLocaleString('en-US', {
      year: 'numeric',
    });
    return expenseYear === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
