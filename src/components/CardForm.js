export default function CardForm(props) {
  return (
    <form>
      <label htmlFor="">Cardholder Name</label>
      <input
        type="text"
        placeholder="e.g. Jane Appleseed"
        value={props.name}
        onChange={(e) => props.changeName(e)}
      />

      <label htmlFor="">Card Number</label>
      <input
        type="number"
        placeholder="e.g. 1234 5678 9123 0000"
        value={props.number}
        onChange={(e) => props.changeNumber(e)}
      />
      <div className="exp-date">
        <div>
          <label htmlFor="">Exp. Date (MM/YY)</label>
          <input
            type="number"
            placeholder="MM"
            id="month"
            value={props.cardExpireMonthInput}
            onChange={(e) => props.changeCardExpireMonthInput(e)}
          />
          <input
            type="number"
            placeholder="YY"
            id="year"
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
            value={props.cvcValue}
            onChange={(e) => props.changeCvcValue(e)}
          />
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}
