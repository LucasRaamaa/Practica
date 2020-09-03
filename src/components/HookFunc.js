import React, { useState, useEffect } from "react";

// 11:44 empeze
// manejo de useState, useEffect con geolocation, mousePosition y cambios de estados de una linterna

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null,
};

const HookFunc = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState("false");
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );
  let mounted = true;

  useEffect(() => {
    document.title = `you have clicked ${count}`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnLine);
    window.addEventListener("offline", handleOffLine);
    navigator.geolocation.getCurrentPosition(handleGeoLocation);
    const watchId = navigator.geolocation.watchPosition(handleGeoLocation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnLine);
      window.removeEventListener("offline", handleOffLine);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const handleGeoLocation = (event) => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      });
    }
  };

  const handleOnLine = () => {
    setStatus(true);
  };

  const handleOffLine = () => {
    setStatus(false);
  };

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const incrementCount = () => {
    setCount((prevCount) => count + 1);
  };
  const toggleLight = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div className="flex items-center justify-center flex-col pt-4">
      <h2 className="text-center font-extrabold text-lg text-gray-800 mb-5">
        Counter {count}
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full "
        onClick={incrementCount}
      >
        Las Veces que se incremento {count}
      </button>
      <h2 className="m-2 text-lg font-medium text-center mt-10">
        Toggle Light (Click Button)
      </h2>
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          height: "50px",
          width: "50px",
          background: isOn ? "yellow" : "grey",
        }}
        onClick={toggleLight}
      />
      <h2 className="m-2 font-sans text-center underline">Mouse Position</h2>
      <p className="text-center font-sans bg-auto">
        {" "}
        {JSON.stringify(mousePosition, null, 2)}
      </p>

      <h2 className="m-2 font-sans text-center underline pt-10">
        {" "}
        NetWork Status
      </h2>
      <p className="m-2 font-sans text-center">
        Your are{" "}
        <strong className="underline">{status ? "online" : "offline"}</strong>
      </p>
      <div className="text-center pt-10">
        <h2 className="underline"> GeoLocation</h2>
        <p>
          <span className="underline"> Latitude is</span>: {latitude}
        </p>
        <p>
          <span className="underline">Longitude is</span>: {longitude}
        </p>
        <p>
          <span className="underline">Your speed is</span>:{" "}
          {speed ? speed : "0"}
        </p>
      </div>
    </div>
  );
};

export default HookFunc;
