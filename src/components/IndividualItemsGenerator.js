import React from "react";

const IndividualItemsGenerator = (props) => {
  const date = props.expenseDate.toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const name = props.expenseName
  const amount = props.expenseAmount

  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>${amount}</td>
      <td className="deleteItemButton">X</td>
    </tr>
  );
};

export default IndividualItemsGenerator;
