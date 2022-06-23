import React from "react";

const IndividualItemsGenerator = ({
  expenseDate,
  expenseName,
  expenseAmount,
  expenseLocation,
  id,
  onDelete,
}) => {
  const date = expenseDate.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <tr className="rows">
      <td>{date}</td>
      <td>{expenseName}</td>
      <td>{expenseLocation}</td>
      <td>${expenseAmount}</td>
      <td className="deleteItemButton" onClick={() => onDelete(id)}>
        X
      </td>
    </tr>
  );
};

export default IndividualItemsGenerator;
