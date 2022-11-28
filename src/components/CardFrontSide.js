import logo from "..//images/card-logo.svg";

export default function CardFrontSide(props) {
  return (
    <div className="card-front-side">
      <img src={logo} alt="logo" />
      <div className="card-number-front-side">{props.cardNumber}</div>
      <div className="card-holder-front-side">
        <p>{props.cardHolder}</p>
        <p>{props.cardExpireDate}</p>
      </div>
    </div>
  );
}
