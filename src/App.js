import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount(){
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //AJAX
    .then(response => response.json()) //converts the raw string from the request into json
    .then((data) => {
      this.setState({
        flats: data
      })
    })
  }

  render() {
    const center = {
      lat: 48.856,
      lng: 2.3522
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map(function(flat) {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={12}
          >
            {this.state.flats.map((flat) => {
              return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} />
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
