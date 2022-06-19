import React, { useState } from 'react';
import "./App.css";
import ControlsForm from "./components/ControlsForm";
import ExpensesTable from "./components/ExpensesTable";

const tempData = [
  {
    id: "e1",
    expenseName: "Computer",
    expenseAmount: 1899.99,
    expenseDate: new Date(2022, 4, 19),
  },
  {
    id: "e2",
    expenseName: "Wooden Desk",
    expenseAmount: 159.99,
    expenseDate: new Date(2022, 4, 10),
  },
  {
    id: "e3",
    expenseName: "Chair",
    expenseAmount: 199.99,
    expenseDate: new Date(2022, 4, 17),
  },
];

function App() {

  const [expenses, setExpenses] = useState(tempData)

  const onFormSubmitHandler = (enteredExpenseData) => {
    const expenseDataWithID = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    setExpenses((prevExpenses) => {
      return [expenseDataWithID, ...prevExpenses];
    })    
    };
  

  return (
    <div className="App">
      <div className="titleBar">Expense Tracker</div>
      <ControlsForm onFormSubmit={onFormSubmitHandler} />
      <ExpensesTable items={expenses} />
    </div>
  );
}

export default App;
