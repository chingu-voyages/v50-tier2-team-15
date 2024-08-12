import { useState, useEffect, useRef } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";

export default function FoodLocationMap({ selectedItem }) {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoWindowRef.current && !infoWindowRef.current.contains(event.target)) {
        setIsInfoWindowOpen(false);
      }
    };

    if (isInfoWindowOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isInfoWindowOpen]);

  if (!selectedItem) return null;

  return (
    <APIProvider apiKey={import.meta.env.VITE_MAP_API}>
      <div
        className="mt-14"
        style={{
          height: "35vh",
          width: "100%",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <Map
          zoom={12}
          center={{ lat: selectedItem.latitude, lng: selectedItem.longitude }}
          mapId={import.meta.env.VITE_MAP_ID}
        >
          <AdvancedMarker
            position={{ lat: selectedItem.latitude, lng: selectedItem.longitude }}
            onClick={() => setIsInfoWindowOpen(true)}
          >
            <Pin
              background={"#FB8B24"}
              borderColor={"#5F0F40"}
              glyphColor={"#5F0F40"}
            />
          </AdvancedMarker>

          {isInfoWindowOpen && (
            <InfoWindow
              position={{ lat: selectedItem.latitude, lng: selectedItem.longitude }}
              onCloseClick={() => setIsInfoWindowOpen(false)}
            >
              <div
                ref={infoWindowRef}
                className="bg-white rounded-lg shadow-lg"
              >
                <h3 className="font-bold text-lg text-purple">{selectedItem.name}</h3>
                <p className="text-darkOrange font-para font-medium">Where: {selectedItem.country}</p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

FoodLocationMap.propTypes = {
  selectedItem: PropTypes.object.isRequired,
};
