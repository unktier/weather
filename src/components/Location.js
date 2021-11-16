import React from "react";
import useLocation from "../hooks/useLocation";
import "./Location.css";

const Location = () => {
  const [city, country] = useLocation();
  return <div className="location-city-country">{`${city}, ${country}`}</div>;
};

export default Location;
