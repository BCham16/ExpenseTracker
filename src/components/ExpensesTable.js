import AddExpense from "./AddExpense";
import "./ExpensesTable.css";
import IndividualItemsGenerator from "./IndividualItemsGenerator";
import TableHeader from "./TableHeader";

const ExpensesTable = ({ items, onDelete, onAddExpense }) => {
  return (
    <div className="ExpensesContainer">
      <p>Expenses Table</p>
      <table>
        <TableHeader />
        <tbody>
          {items.map((expense) => (
            <IndividualItemsGenerator
              key={expense.id}
              id={expense.id}
              expenseName={expense.expenseName}
              expenseAmount={expense.expenseAmount}
              expenseDate={expense.expenseDate}
              onDelete={onDelete}
              expenseLocation={expense.expenseLocation}
            />
          ))}
          <AddExpense onAddExpense={onAddExpense} />
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
