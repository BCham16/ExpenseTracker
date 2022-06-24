import React from "react";
import "./AddExpense.css";

const AddExpense = ({ onAddExpense }) => {
  return (
    <tr>
      <td className="filler"></td>
      <td colSpan="3" className="addExpenseButton" onClick={onAddExpense}>
        +
      </td>
      <td className="filler"></td>
    </tr>
  );
};

export default AddExpense;
