import React, { useState } from "react";
import "./ControlsForm.css";

const ControlsForm = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [enteredItemName, setEnteredItemName] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const itemNameChangeHandler = (event) => {
    setEnteredItemName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      expenseName: enteredItemName,
      expenseAmount: enteredAmount,
      expenseLocation: enteredLocation,
      expenseDate: new Date(selectedDate),
    };

    props.onFormSubmit(expenseData);
    setEnteredAmount("");
    setEnteredItemName("");
    setEnteredLocation("");
    setSelectedDate("");
  };

  return (
    <div className="ControlsForm">
      <form onSubmit={submitHandler}>
        <input
          type="Date"
          className="inputField"
          id="dateInput"
          value={selectedDate}
          onChange={dateChangeHandler}
        />
        <input
          className="inputField"
          id="itemNameInput"
          placeholder="Enter Item"
          value={enteredItemName}
          onChange={itemNameChangeHandler}
        />
        <input
          className="inputField"
          id="locationInput"
          placeholder="Enter Location"
          value={enteredLocation}
          onChange={locationChangeHandler}
        ></input>
        <input
          className="inputField"
          id="amountInput"
          placeholder="Enter Amount"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <button type="Submit" id="formSubmitButton">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ControlsForm;
