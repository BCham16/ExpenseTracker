import "./App.css";
import ControlsForm from "./components/ControlsForm";
import ExpensesTable from "./components/ExpensesTable";

function App() {

  const expenses = [
    {
      id: "e1",
      expenseName: "Computer",
      expenseAmount: 1899.99,
      date: new Date(2022, 6, 19),
    },
    {
      id: "e2",
      expenseName: "Wooden Desk",
      expenseAmount: 159.99,
      date: new Date(2022, 6, 10),
    },
    {
      id: "e3",
      expenseName: "Chair",
      expenseAmount: 199.99,
      date: new Date(2022, 6, 17),
    },
  ];

  const onFormSubmitHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);

  }

  return (
    <div className="App">
      <div className="titleBar">Expense Tracker</div>
      <ControlsForm onFormSubmit={onFormSubmitHandler} />
      <ExpensesTable items={expenses} />
    </div>
  );
}

export default App;
