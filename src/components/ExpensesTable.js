import React from "react";
import "./ExpensesTable.css";
import IndividualItemsGenerator from "./IndividualItemsGenerator";

const ExpensesTable = (props) => {
  // const expenses = [
  //   {
  //     id: "e1",
  //     expenseName: "Computer",
  //     expenseAmount: 1899.99,
  //     date: new Date(2022, 6, 19),
  //   },
  //   {
  //     id: "e2",
  //     expenseName: "Wooden Desk",
  //     expenseAmount: 159.99,
  //     date: new Date(2022, 6, 10),
  //   },
  //   {
  //     id: "e3",
  //     expenseName: "Chair",
  //     expenseAmount: 199.99,
  //     date: new Date(2022, 6, 17),
  //   },
  // ];

  return (
    <div className="ExpensesContainer">
      <span>Expenses Table</span>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>6/18/22</td>
            <td>Computer</td>
            <td>$1899.99</td>
            <td className="deleteItemButton">X</td>
          </tr> */}
          <IndividualItemsGenerator
            expenseName={props.items[0].expenseName}
            expenseAmount={props.items[0].expenseAmount}
            expenseDate={props.items[0].date}
          />
          <IndividualItemsGenerator
            expenseName={props.items[1].expenseName}
            expenseAmount={props.items[1].expenseAmount}
            expenseDate={props.items[1].date}
          />
          <IndividualItemsGenerator
            expenseName={props.items[2].expenseName}
            expenseAmount={props.items[2].expenseAmount}
            expenseDate={props.items[2].date}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
