import "./Reset.css";
import "./App.css";
import { useState } from "react";
import CardFrontSide from "./components/CardFrontSide";
import CardBackSide from "./components/CardBackSide";
import CardForm from "./components/CardForm";
import ThankYou from "./components/ThankYou";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("JANE APPLESEED");
  const [cardExpireMonth, setCardExpireMonth] = useState("00");
  const [cardExpireYear, setCardExpireYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [nameInputValue, setNameInputValue] = useState("");
  const [cardNumberInputValue, setCardNumberInputValue] = useState("");
  const [cardExpireMonthInput, setCardExpireMonthInput] = useState("");
  const [cardExpireYearInput, setCardExpireYearInput] = useState("");
  const [cvcValue, setCvcValue] = useState("");
  const [nameBlank, setNameBlank] = useState("");
  const [numberBlank, setNumberBlank] = useState("");
  const [expireDateBlank, setExpireDateBlank] = useState("");
  const [cvcBlank, setCvcBlank] = useState("");
  const [confirmClicked, setConfirmClicked] = useState(false);
  // const [continueClicked, setContinueClicked] = useState(false);
  function changeName(e) {
    setNameInputValue(e.target.value);

    if (e.target.value === "") {
      setCardHolder("JANE APPLESEED");
    } else {
      setCardHolder(e.target.value.toUpperCase());
    }
  }
  function changeNumber(e) {
    if (e.target.value.length < 16) {
      setCardNumberInputValue(e.target.value);
    }

    const splits = e.target.value.match(/.{1,4}/g);
    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" "); // Join all the splits with an empty space
    }
    setCardNumber(spacedNumber);
    if (e.target.value === "") {
      setCardNumber("0000 0000 0000 0000");
    }
  }
  function changeCardExpireMonthInput(e) {
    if (e.target.value.length < 3) {
      setCardExpireMonthInput(e.target.value);
      setCardExpireMonth(e.target.value);
      console.log(cardExpireMonthInput);
    }
    if (e.target.value > 12) {
      setCardExpireMonthInput(12);
      setCardExpireMonth(12);
    } else if (e.target.value === "") {
      setCardExpireMonth("00");
    }
  }

  function changeCardExpireYearInput(e) {
    if (e.target.value.length < 3) {
      setCardExpireYearInput(e.target.value);
      setCardExpireYear(e.target.value);
    }
    let year = new Date().getFullYear().toString().substr(-2);
    // let numberYear = parseInt(year);

    if (e.target.value < year) {
      console.log(e.target.value);
      setCardExpireYearInput(year);
      setCardExpireYear(year);
    }
    if (e.target.value === "") {
      setCardExpireYear("00");
    }
  }
  function changeCvcValue(e) {
    if (e.target.value.length < 4) {
      setCvcValue(e.target.value);
      setCvc(e.target.value);
    }
    if (e.target.value === "") {
      setCvc("000");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (nameInputValue === "") {
      setNameBlank("Can’t be blank");
    } else {
      setNameBlank("");
    }
    if (cardNumberInputValue === "") {
      setNumberBlank("Can’t be blank");
    } else if (!isNaN(+cardNumberInputValue)) {
      setNumberBlank("wrong format, numbers only");
    } else {
      setNumberBlank("");
    }
    if (cardExpireMonthInput === "" || cardExpireYearInput === "") {
      setExpireDateBlank("Can’t be blank");
    } else {
      setExpireDateBlank("");
    }
    if (cvcValue === "") {
      setCvcBlank("Can’t be blank");
    } else {
      setCvcBlank("");
    }
    if (
      nameInputValue !== "" &&
      cardNumberInputValue !== "" &&
      cardExpireMonthInput !== "" &&
      cardExpireYearInput !== "" &&
      cvcValue !== ""
    ) {
      setConfirmClicked(true);
    }
  }
  function continueClicked(e) {
    e.preventDefault();
    setConfirmClicked(false);
    setCardNumber("0000 0000 0000 0000");
    setCardNumberInputValue("");
    setCardHolder("JANE APPLESEED");
    setNameInputValue("");
    setCardExpireMonth("00");
    setCardExpireYear("00");
    setCardExpireMonthInput("");
    setCardExpireYearInput("");
    setCvcValue("");
    setCvc("000");
    setNumberBlank("");
  }
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
        {confirmClicked ? (
          <ThankYou continueClicked={continueClicked} />
        ) : (
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
            handleSubmit={handleSubmit}
            nameBlank={nameBlank}
            numberBlank={numberBlank}
            expireDateBlank={expireDateBlank}
            cvcBlank={cvcBlank}
            // changeCardHolder = {changeCardHolder}
          />
        )}
      </div>
    </div>
  );
}

export default App;
