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
          <input type="number" placeholder="MM" id="month" />
          <input type="number" placeholder="YY" id="year" />
        </div>

        <div>
          <label htmlFor="">CVC</label>
          <input type="number" placeholder="e.g. 123" id="cvc" />
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}
