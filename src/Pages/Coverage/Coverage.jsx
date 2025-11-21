import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);

  const position = [23.685, 90.3563];
  const mapRef = useRef(null)

  const haldleSearch = (e) => {
  e.preventDefault();

  const location = e.target.location.value
  const district = serviceCenters.find(c =>
    c.district.toLowerCase().includes(location.toLowerCase())

  );

  if (district) {
    const coord = [district.latitude, district.longitude];
    // console.log(district,coord);
    // Go to the location
    mapRef.current.flyTo(coord, 11)
  } else {
    console.log("District not found");
  }
};


  return (
    <div>
      <h3 className="text-4xl my-8 font-bold">
        We are avilable in 64 districts
      </h3>
      {/* Scarch */}
      <div className="mb-5">
        <form onSubmit={haldleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="location" type="search" className="grow" placeholder="Search" />

          </label>
        </form>
      </div>
      {/* Map */}
      <div className="border h-150">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-150"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center) => (
            <Marker
              key={center.id}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
