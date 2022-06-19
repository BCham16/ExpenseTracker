import "./ExpensesTable.css";
import IndividualItemsGenerator from "./IndividualItemsGenerator";
import TableHeader from "./TableHeader";

const ExpensesTable = (props) => {

  return (
    <div className="ExpensesContainer">
      <span>Expenses Table</span>
      <table>
        <TableHeader />
        <tbody>
          {props.items.map((expense) => (
            <IndividualItemsGenerator
              key={expense.id}
              expenseName={expense.expenseName}
              expenseAmount={expense.expenseAmount}
              expenseDate={expense.expenseDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
