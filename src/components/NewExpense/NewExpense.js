import { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [showForm, setShowForm] = useState(true);

  const newExpenseHandler = (e) => {
    e.preventDefault();
    const ExpenseData = {
      title: titleInput,
      amount: +amountInput,
      date: new Date(dateInput),
      id: Math.random().toString(),
    };

    onAddExpense(ExpenseData);
    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };

  let jsx = (
    <button onClick={() => setShowForm((prev) => !prev)}>
      Add New Expense
    </button>
  );

  return (
    <div className="new-expense">
      {showForm ? (
        jsx
      ) : (
        <form onSubmit={newExpenseHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                type="text"
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                value={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
                type="number"
                min="0.01"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                type="date"
                min="2019-01-01"
                max="2023-12-31"
              />
            </div>
            <div className="new-expense__actions">
              <button onClick={() => setShowForm(!showForm)}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewExpense;
