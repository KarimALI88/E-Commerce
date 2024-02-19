import React from "react";
import "../css/confirm.css";
import Confetti from "react-confetti";

function Confirm() {
  return (
    <div className="container confirmation-div">
      <Confetti />
      <h2>
        <span>thank you !</span> for your confirmation and your trust.
      </h2>
      <h3>We will contact with you</h3>
    </div>
  );
}

export default Confirm;
