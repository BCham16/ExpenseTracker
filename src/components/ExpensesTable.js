import "./ExpensesTable.css";
import IndividualItemsGenerator from "./IndividualItemsGenerator";
import TableHeader from "./TableHeader";

const ExpensesTable = ({ items, onDelete }) => {

  return (
    <div className="ExpensesContainer">
      <span>Expenses Table</span>
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
