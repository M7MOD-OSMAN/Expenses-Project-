import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses, setExpenses, onFilterExpense }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear() === +filteredYear
  );
  const expensesItems = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // onFilterExpense(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        filterChangeHandler={filterChangeHandler}
        filteredYear={filteredYear}
        setExpenses={setExpenses}
        onFilterExpense={onFilterExpense}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesItems.length > 0 ? (
        expensesItems
      ) : (
        <h2 style={{ textAlign: "center", color: "#fff" }}>
          There is no expenses with your filter criteria
        </h2>
      )}
    </div>
  );
};

export default Expenses;
