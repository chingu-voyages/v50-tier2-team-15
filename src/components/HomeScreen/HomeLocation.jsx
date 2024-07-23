import mapTemp from "../../assets/map-temp.svg";

const HomeLocation = () => {
  return (
    <>
      <section className="text-center">
      <div className="flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold text-purple items-start mt-[100px]">
            Our Locations
          </h2>
          <span className="block center w-[16%] h-0.5 bg-darkRed mt-9 mx-auto"></span>
        </div>
        <div className="map-container mx-auto w-2/3 h-[100%] mt-20">
          <img src={mapTemp} alt="Map" className="w-full h-full object-cover" />
        </div>
      </section>
    </>
  );
};

export default HomeLocation;
