import { useState, useEffect } from "react";
import useCoords from "./useCoords";
import opencage from "../apis/opencage";
import axios from "axios";

const useLocation = () => {
  const [city, setCity] = useState("Loading");
  const [country, setCountry] = useState("Loading");
  const [latitude, longitude] = useCoords();

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const getLocation = async (latLong) => {
      const {
        data: {
          results: {
            0: { components },
          },
        },
      } = await opencage.get("/", {
        params: {
          q: latLong,
        },
      });

      components.city ? setCity(components.city) : setCity(components.county);
      setCountry(components.country);
    };

    if (latitude && longitude) {
      const paramData = `${latitude.toFixed(6)},${longitude.toFixed(6)}`;
      getLocation(paramData);
    }

    return () => {
      source.cancel("axios request cancelled");
    };
  }, [latitude, longitude]);

  return [city, country];
};

export default useLocation;
