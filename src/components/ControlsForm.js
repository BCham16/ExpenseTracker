import "./ControlsForm.css";

const ControlsForm = () => {
  return (
    <div className="ControlsForm">
      <form>
        <input type="Date" className="inputField" id="dateInput"></input>
        <input
          className="inputField"
          id="itemNameInput"
          placeholder="Enter Item"
        ></input>
        <input
          className="inputField"
          id="amountInput"
          placeholder="Enter Amount"
        ></input>
        <button type="Submit" id="formSubmitButton">Submit</button>
      </form>
    </div>
  );
};

export default ControlsForm;
