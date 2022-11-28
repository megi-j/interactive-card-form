import "./Reset.css";
import "./App.css";
import { useState } from "react";
import CardFrontSide from "./components/CardFrontSide";
import CardBackSide from "./components/CardBackSide";
import CardForm from "./components/CardForm";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("JANE APPLESEED");
  const [cardExpireDate, setCardExpireDate] = useState("00/00");
  const [cvc, setCvc] = useState("000");
  const [nameInputValue, setNameInputValue] = useState("");
  const [cardNumberInputValue, setCardNumberInputValue] = useState("");

  function changeName(e) {
    setNameInputValue(e.target.value);
    console.log(nameInputValue);
  }
  function changeNumber(e) {
    setCardNumberInputValue(e.target.value);
    console.log(cardNumberInputValue);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCardHolder(nameInputValue);
  }
  return (
    <div className="container">
      <div className="colorfull-side">
        <CardFrontSide
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardExpireDate={cardExpireDate}
        />
        <CardBackSide cvc={cvc} />
      </div>
      <div className="white-side">
        <CardForm
          name={nameInputValue}
          number={cardNumberInputValue}
          changeName={(e) => changeName(e)}
          changeNumber={changeNumber}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
