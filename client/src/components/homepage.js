//Imports---
import "../App.css";
import { useState, useEffect } from "react";
import Map from "../components/map";
import { Link, NavLink } from "react-router-dom";

export default Homepage;

let temporaryArray = [];

//Homepage function---
function Homepage() {
  const [center, setCenter] = useState([43.867867, -70.5892475]);
  const [restaurantDir, setRestaurantDir] = useState([]);

  const [markerFull, setMarkerFull] = useState([]);

  //Fetch for api to return a directory of a restaurant---
  useEffect(() => {
    fetch("/api")
      .then((restaurant) => restaurant.json())
      .then((restaurantDirArray) => {
        setRestaurantDir(restaurantDirArray);
      });
  }, []);

  //Fetch for specific restaurant---
  useEffect(() => {
    //Temporary variables---
    let temporaryName;
    let temporaryId;
    let temporaryLatitude;
    let temporaryLongitude;

    //Fetch request forEach loop over restaurant directory---
    restaurantDir.forEach((element) => {
      fetch(`/api/${element}`)
        .then((restaurant) => restaurant.json())
        .then((restaurantArray) => {
          //Setting temporary variables to arrays---
          temporaryName = restaurantArray.name;
          temporaryId = restaurantArray.id;
          temporaryLatitude = restaurantArray.latitude;
          temporaryLongitude = restaurantArray.longitude;
          console.log(restaurantArray.name);

          //Push to temporary array---
          temporaryArray.push([
            temporaryName,
            temporaryId,
            temporaryLatitude,
            temporaryLongitude,
          ]);
        });
    });

    //Set marker to temporaryArray---
    setMarkerFull(temporaryArray);
  }, [restaurantDir]);

  //Returning---
  return (
    <div className="main-wrapper">
      <div className="heading">
        <div id="yelp-title">
          <h1>Yelpington</h1>
        </div>
      </div>
      <div className="map-nav-area">
        {/* Nav bar for restaurant list--- */}
        <nav className="homepage-nav">
          <div className="nav-link">
            <NavLink to="/restaurant/koto" className="nav-clickable">
              Koto Japanese Restaurant
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/smokeys">Smokey's Low n' Slow</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/hana">HANA Japanese Restaurant</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/chicken-charlies">
              Chicken Charlie's Rotisserie Grill & BBQ
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/the-fish-chip">THE FISH & CHIP</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/gaku-ramen">Gaku Ramen</NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/bistro-de-margot">
              Bistro de Margot
            </NavLink>
          </div>
          <div className="nav-link">
            <NavLink to="/restaurant/shelburne-tap-house">
              Shelburne Tap House
            </NavLink>
          </div>
        </nav>
        {/* Passing variables to map */}
        <Map
          center={center}
          setCenter={setCenter}
          restaurantDir={restaurantDir}
          markerFull={markerFull}
          setMarkerFull={setMarkerFull}
        />{" "}
      </div>
    </div>
  );
}
