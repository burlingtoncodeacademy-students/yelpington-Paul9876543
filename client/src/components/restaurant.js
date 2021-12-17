//Imports---
import React from "react";
import { useEffect, useState } from "react";
import individualMap from "./individualMap";
import "../App.css";

//Exports---
export default Restaurant;

function Restaurant() {
  //Variables---
  const [center, setCenter] = useState([43.867867, -70.5892475]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  //Pulling id out using pathname---
  let restaurantName = window.location.pathname.split("/")[2];

  //Using useEffect to wrap fetch---
  useEffect(() => {
    //Temporary variables---
    let temporaryName;
    let temporaryAddress;
    let temporaryPhone;
    let temporaryHours;
    let temporaryNotes;
    let temporaryLatitude;
    let temporaryLongitude;
    //Fetching restaurant
    fetch(`/api/${restaurantName}`)
      .then((res) => res.json())
      .then((singleRestaurantArray) => {
        temporaryName = singleRestaurantArray.name;
        temporaryAddress = singleRestaurantArray.address;
        temporaryPhone = singleRestaurantArray["phone number"];
        temporaryHours = singleRestaurantArray.hours;
        temporaryNotes = singleRestaurantArray.notes;
        temporaryLatitude = singleRestaurantArray.latitude;
        temporaryLongitude = singleRestaurantArray.longitude;
        setName(temporaryName);
        setAddress(temporaryAddress);
        setPhone(temporaryPhone);
        setHours(temporaryHours);
        setNotes(temporaryNotes);
        setCenter([temporaryLatitude, temporaryLongitude]);
      });
  }, []);

  //Event handler---
  const homePageButton = (evt) => {
    window.location.href = `/`;
  };

  //Return---
  return (
    <div className="main-wrapper">
      <div className="heading">
        <div id="yelp-title" onClick={homePageButton}>
          <h1>Yelpington</h1>
        </div>
      </div>
      {/* Restaurant name variable */}
      <div className="individual-restaurant-name">
        <h2>{name}</h2>
      </div>
      {/* Info grid */}
      <div className="restaurant-info-box">
        <div className="restaurant-info default">Address:</div>
        <div className="restaurant-info">{address}</div>
        <div className="restaurant-info default">Phone Number:</div>
        <div className="restaurant-info">{phone}</div>
        <div className="restaurant-info default">Hours:</div>
        <div className="restaurant-info">{hours}</div>
        <div className="restaurant-info default">Notes:</div>
        <div className="restaurant-info">{notes}</div>
      </div>
      {/* Passing variables to individual map */}
      <individualMap name={name} center={center} setCenter={setCenter} />{" "}
    </div>
  );
}
