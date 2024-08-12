// import mapTemp from "../../assets/map-temp.svg";
import Map from "../Map/Map";


const HomeLocation = () => {
  return (
    <>
      <section className="text-center">
      <div className="flex flex-col justify-center items-center">
          <h2 id="locations" className="lg:text-5xl text-3xl font-bold text-purple items-start mt-[100px] mb-8">
            Our Locations
          </h2>
          <span className="block center w-[16%] h-0.5 bg-darkRed md:mt-9 mx-auto"></span>
        </div>
        <Map />
      </section>
    </>
  );
};

export default HomeLocation;
