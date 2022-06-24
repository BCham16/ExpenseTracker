import React, { useEffect, useState } from "react";
import "./App.css";
import ExpensesTable from "./components/ExpensesTable";
import Modal from "./components/Modal";

const preloadedData = [
  {
    id: "e1",
    expenseName: "Computer",
    expenseAmount: 1899.99,
    expenseLocation: "Microcenter",
    expenseDate: "2022-05-19",
  },
  {
    id: "e2",
    expenseName: "Wooden Desk",
    expenseAmount: 159.99,
    expenseLocation: "Amazon",
    expenseDate: "2022-05-10",
  },
  {
    id: "e3",
    expenseName: "Chair",
    expenseAmount: 199.99,
    expenseLocation: "Secret Labs",
    expenseDate: "2022-05-06",
  },
];

function App() {
  const [expenses, setExpenses] = useState(preloadedData);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("expensesList")) {
      let tempExpenses = JSON.parse(localStorage.getItem("expensesList"));
      setExpenses(tempExpenses);
    }
  }, []);

  useEffect(() => {
    if (expenses) {
      localStorage.setItem("expensesList", JSON.stringify(expenses));
    }
  }, [expenses]);

  const onFormSubmitHandler = (enteredExpenseData) => {
    const expenseDataWithID = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Only check for blank inputs is expense amount so nothing is added if
    //all fields are blank. Code was too lengthy if it checks all fields
    if (expenseDataWithID.expenseAmount !== "") {
      setExpenses((prevExpenses) => {
        setOpenModal(false);
        return [expenseDataWithID, ...prevExpenses];
      });
    } else setOpenModal(false);
  };

  const onDeleteHandler = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id));
  };

  return (
    <div className="App">
      <div className="titleBar">
        <Modal open={openModal} onFormSubmit={onFormSubmitHandler} />
      </div>
      <ExpensesTable
        items={expenses}
        onDelete={onDeleteHandler}
        onAddExpense={() => setOpenModal(true)}
      />
    </div>
  );
}

export default App;
