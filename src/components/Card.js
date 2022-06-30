import pin from "../pin.svg";

export default function Card(props) {
  const searchTerm = props.landmark.replace(/\s/i, "+");
  return (
    <div className="card">
      <img src={props.imgsrc} alt="country" className="image" />
      <div className="card--info">
        <div className="card--location">
          <img src={pin} alt="pin" width="25" />
          <span className="country">{props.country}</span>
          <a href={`https://www.google.com/maps/place/${searchTerm}`}>
            View on Google Maps
          </a>
        </div>
        <h1 className="card--landmark">{props.landmark}</h1>
        <div className="card--details">
          <div className="card--dates">
            {props.startDate} - {props.endDate}
          </div>
          <div className="card--desc">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
