// import mapTemp from "../../assets/map-temp.svg";
import Map from "../Map/Map";


const HomeLocation = () => {
  return (
    <>
      <section className="text-center">
      <div className="flex flex-col justify-center items-center">
          <h2 id="locations" className="text-5xl font-bold text-purple items-start mt-[100px]">
            Our Locations
          </h2>
          <span className="block center w-[16%] h-0.5 bg-darkRed mt-9 mx-auto"></span>
        </div>
        <Map />
      </section>
    </>
  );
};

export default HomeLocation;
