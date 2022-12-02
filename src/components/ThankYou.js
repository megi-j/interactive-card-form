import React from "react";
import complete from "../images/icon-complete.svg";

export default function ThankYou(props) {
  return (
    <form onSubmit={(e) => props.continueClicked(e)} className="thanks">
      <img src={complete} alt="" />
      <h1>THANK YOU!</h1>
      <p>We’ve added your card details</p>
      <button type="submit">Continue</button>
    </form>
  );
}
