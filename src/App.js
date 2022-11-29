import "./Reset.css";
import "./App.css";
import { useState } from "react";
import CardFrontSide from "./components/CardFrontSide";
import CardBackSide from "./components/CardBackSide";
import CardForm from "./components/CardForm";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("JANE APPLESEED");
  const [cardExpireMonthInput, setCardExpireMonthInput] = useState();
  const [cardExpireYearInput, setCardExpireYearInput] = useState();
  const [cvcValue, setCvcValue] = useState();
  const [cardExpireMonth, setCardExpireMonth] = useState("00");
  const [cardExpireYear, setCardExpireYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [nameInputValue, setNameInputValue] = useState("");
  const [cardNumberInputValue, setCardNumberInputValue] = useState("");

  function changeName(e) {
    setNameInputValue(e.target.value);
    setCardHolder(nameInputValue.toUpperCase());
  }
  function changeNumber(e) {
    if (e.target.value.length < 17) {
      setCardNumberInputValue(e.target.value);
    }
    const splits = cardNumberInputValue.match(/.{1,4}/g);
    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" "); // Join all the splits with an empty space
    }
    setCardNumber(spacedNumber);
  }
  function changeCardExpireMonthInput(e) {
    if (e.target.value.length < 3) {
      setCardExpireMonthInput(e.target.value);
      setCardExpireMonth(e.target.value);
      console.log(cardExpireMonthInput);
    }
  }
  function changeCardExpireYearInput(e) {
    if (e.target.value.length < 3) {
      setCardExpireYearInput(e.target.value);
      setCardExpireYear(e.target.value);
    }
  }
  function changeCvcValue(e) {
    if (e.target.value.length < 4) {
      setCvcValue(e.target.value);
      setCvc(e.target.value);
    }
  }
  // function changeCardHolder() {}
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setCardHolder(nameInputValue);
  // }
  return (
    <div className="container">
      <div className="colorfull-side">
        <CardFrontSide
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardExpireMonth={cardExpireMonth}
          cardExpireYear={cardExpireYear}
        />
        <CardBackSide cvc={cvc} />
      </div>
      <div className="white-side">
        <CardForm
          name={nameInputValue}
          number={cardNumberInputValue}
          changeName={(e) => changeName(e)}
          changeNumber={changeNumber}
          cardExpireMonthInput={cardExpireMonthInput}
          changeCardExpireMonthInput={changeCardExpireMonthInput}
          cardExpireYearInput={cardExpireYearInput}
          changeCardExpireYearInput={changeCardExpireYearInput}
          cvcValue={cvcValue}
          changeCvcValue={changeCvcValue}
          // changeCardHolder = {changeCardHolder}
          // handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
