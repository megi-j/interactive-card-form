export default function CardForm(props) {
  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <label htmlFor="">Cardholder Name</label>
      <input
        type="text"
        placeholder="e.g. Jane Appleseed"
        value={props.name}
        onChange={(e) => props.changeName(e)}
      />
      <label
        htmlFor=""
        style={{ color: "#FF5050", fontSize: 12 }}
        className="red-label"
      >
        {props.nameBlank}
      </label>
      <label htmlFor="">Card Number</label>
      <input
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
        value={props.number}
        onChange={(e) => props.changeNumber(e)}
      />
      <label
        htmlFor=""
        style={{ color: "#FF5050", fontSize: 12 }}
        className="red-label"
      >
        {props.numberBlank}
      </label>
      <div className="exp-date">
        <div>
          <label htmlFor="">Exp. Date (MM/YY)</label>
          <input
            type="number"
            placeholder="MM"
            id="month"
            min={1}
            max={12}
            value={props.cardExpireMonthInput}
            onChange={(e) => props.changeCardExpireMonthInput(e)}
          />
          <input
            type="number"
            placeholder="YY"
            id="year"
            // min={22}
            value={props.cardExpireYearInput}
            onChange={(e) => props.changeCardExpireYearInput(e)}
          />
        </div>

        <div>
          <label htmlFor="">CVC</label>
          <input
            type="number"
            placeholder="e.g. 123"
            id="cvc"
            min={1}
            value={props.cvcValue}
            onChange={(e) => props.changeCvcValue(e)}
          />
        </div>
      </div>
      <div className="blank">
        <p style={{ color: "#FF5050", fontSize: 12 }}>
          {props.expireDateBlank}
        </p>
        <p style={{ color: "#FF5050", fontSize: 12 }}>{props.cvcBlank}</p>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}
