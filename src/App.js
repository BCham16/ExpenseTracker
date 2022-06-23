import React, { useState } from "react";
import "./App.css";
import ControlsForm from "./components/ControlsForm";
import ExpensesTable from "./components/ExpensesTable";

const preloadedData = [
  {
    id: "e1",
    expenseName: "Computer",
    expenseAmount: 1899.99,
    expenseLocation: "Microcenter",
    expenseDate: new Date(2022, 4, 19),
  },
  {
    id: "e2",
    expenseName: "Wooden Desk",
    expenseAmount: 159.99,
    expenseLocation: "Amazon",
    expenseDate: new Date(2022, 4, 10),
  },
  {
    id: "e3",
    expenseName: "Chair",
    expenseAmount: 199.99,
    expenseLocation: "Secret Labs",
    expenseDate: new Date(2022, 4, 17),
  },
];

function App() {
  const [expenses, setExpenses] = useState(preloadedData);

  const onFormSubmitHandler = (enteredExpenseData) => {
    const expenseDataWithID = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Only check for blank inputs is expense amount so nothing is added if
    //all fields are blank. Code was too lengthy if it checks all fields
    if (expenseDataWithID.expenseAmount !== "") {
      setExpenses((prevExpenses) => {
        return [expenseDataWithID, ...prevExpenses];
      });
    }
  };

  const onDeleteHandler = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id));
  };

  return (
    <div className="App">
      <div className="titleBar">Expense Tracker</div>
      <ControlsForm onFormSubmit={onFormSubmitHandler} />
      <ExpensesTable items={expenses} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
