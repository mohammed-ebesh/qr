"use client";
import { useEffect, useState } from "react";
import Map from "./maps";

function GetCurrentAddress() {
  const [add, setAdd] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLongitude(longitude);
      setLatitude(latitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(data.address));
    });
  }, []);

  return (
    <div className="mt-5">
      {add && (
        <>
          <p>city : {add.city}</p>
          <p>country :{add.country}</p>
          <p>{`lat : ${latitude}`}</p>
          <p>{`long : ${longitude}`}</p>
        </>
      )}
      <Map />
    </div>
  );
}

export default GetCurrentAddress;
