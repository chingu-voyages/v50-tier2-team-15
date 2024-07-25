import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import foodData from "../../../public/fooddata.json";

export default function Intro() {
  const [categories, setCategories] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (foodData) {
      setCategories(foodData);
    }
  }, []); 

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_MAP_API}>
      <div className="mt-14" style={{ height: "75vh", width: "100%", borderRadius: '15px', overflow: 'hidden' }}>
        <Map zoom={7} center={{ lat: 40.7128, lng: -74.006 }} mapId={import.meta.env.VITE_MAP_ID}>
          {Object.keys(categories).map((categoryKey) =>
            Array.isArray(categories[categoryKey]) && categories[categoryKey].length > 0 ? (
              categories[categoryKey].map((item) => (
                <AdvancedMarker
                  key={item.id}
                  position={{ lat: item.latitude, lng: item.longitude }}
                  onClick={() => handleItemClick(item)}
                >
                  <Pin background={"#FB8B24"} borderColor={"#5F0F40"} glyphColor={"#5F0F40"} />
                </AdvancedMarker>
              ))
            ) : (
              
              null
            )
          )}

          {selectedItem && (
            <InfoWindow className="text-purple font-para"
              position={{ lat: selectedItem.latitude, lng: selectedItem.longitude }}
              onCloseClick={() => setSelectedItem(null)}
            >
              <div>
                <h3>{selectedItem.name}</h3>
                <p>Where: {selectedItem.country}</p>
                <p>Rating: {selectedItem.rate}</p>
                <p>Discount: {selectedItem.dsc}</p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

