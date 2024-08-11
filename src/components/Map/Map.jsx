import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import foodData from "../../../public/fooddata.json";
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons

export default function Intro() {
  const [categories, setCategories] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [relatedDescriptions, setRelatedDescriptions] = useState([]);

  useEffect(() => {
    if (foodData) {
      setCategories(foodData);
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    const descriptions = new Set();
    Object.keys(categories).forEach((categoryKey) => {
      if (Array.isArray(categories[categoryKey])) {
        categories[categoryKey].forEach((i) => {
          if (i.name === item.name && !descriptions.has(i.dsc)) {
            descriptions.add(i.dsc);
          }
        });
      }
    });
    setRelatedDescriptions(Array.from(descriptions));
  };

  const renderRatingStars = (rating) => {
    const maxRating = 5;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2px' }}>
        {Array.from({ length: maxRating }, (_, index) =>
          index < rating ? (
            <FaStar key={index} color="#FF6F00" /> // darkOrange color
          ) : (
            <FaRegStar key={index} color="#FF6F00" />
          )
        )}
      </div>
    );
  };

  return (
    <APIProvider apiKey={import.meta.env.VITE_MAP_API}>
      <div
        className="mt-14 md:h-[80vh] h-[50vh] md:w-[95%] w-[100%] overflow-hidden rounded-2xl"
      >
        <Map
          zoom={6}
          center={{ lat: 40.7128, lng: -74.006 }}
          mapId={import.meta.env.VITE_MAP_ID}
        >
          {Object.keys(categories).map((categoryKey) =>
            Array.isArray(categories[categoryKey]) &&
            categories[categoryKey].length > 0 ? (
              categories[categoryKey].map((item) => (
                <AdvancedMarker
                  key={item.id}
                  position={{ lat: item.latitude, lng: item.longitude }}
                  onClick={() => handleItemClick(item)}
                >
                  <Pin
                    background={"#FB8B24"}
                    borderColor={"#5F0F40"}
                    glyphColor={"#5F0F40"}
                  />
                </AdvancedMarker>
              ))
            ) : null
          )}

          {selectedItem && (
            <InfoWindow
              className="text-purple font-para"
              position={{
                lat: selectedItem.latitude,
                lng: selectedItem.longitude,
              }}
              onCloseClick={() => setSelectedItem(null)}
            >
              <div>
                <h3 className="font-bold text-xl text-purple">{selectedItem.name}</h3>
                <p className="text-darkOrange font-para font-medium">Where: {selectedItem.country}</p>
                <p className="font-bold text-purple pt-3 font-md">MENU:</p>
                {relatedDescriptions.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
                <p className="py-2 text-darkOrange font-bold">
                  Rating: {renderRatingStars(selectedItem.rate)}
                </p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
