import React from "react";
import "./AddExpense.css"

const AddExpense = () => {
  return (
    <tr>
      <td className="filler"></td>
      <td colSpan="3" className="addExpenseButton">+</td>
      <td className="filler"></td>
    </tr>
  );
};

export default AddExpense;
