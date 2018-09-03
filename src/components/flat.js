import React from "react";
import "./flat.css";

// const flat = {
//   "id": 145,
//   "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
//   "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//   "price": 164,
//   "priceCurrency": "EUR",
//   "lat": 48.884211,
//   "lng": 2.346890
// }
// <Flat flat={flat} />

class Flat extends React.Component {
  render() {
    const title = this.props.flat.price + this.props.flat.priceCurrency + " - " + this.props.flat.name;

    return (
      <div className="flat">
        <div className="flat-picture"></div>
        <div className="flat-title"></div>
          {title}
      </div>
    );
  }
}

export default Flat;
