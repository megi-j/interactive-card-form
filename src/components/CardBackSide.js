export default function CardBackSide(props) {
  return (
    <div className="card-back-side">
      <div className="black-line"></div>
      <div className="cvc-box">
        <p>{props.cvc}</p>
      </div>
    </div>
  );
}
