import Tacos from "../../assets/specialties-left.png";
import Pasta from "../../assets/specialties-right.png";

const HomeSpecialties = () => {
  return (
    <>
      <section className="flex flex-col py-10 text-left mt-[110px]">
        <div className="flex justify-between items-center mx-4">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold text-purple items-start mt-10">
                FlavorFinder Specialties
              </h2>
              <span className="block center w-[16%] h-0.5 bg-darkRed mt-9 mx-auto"></span>
            </div>
            <div className="flex pt-12 justify-center items-center">
              <div className="w-1/3">
                <img
                  alt="Specialty 1"
                  className="w-[80%]"
                  src={Tacos}
                />
              </div>
              <div className="w-2/3 text-left pr-14">
                <p className="text-2xl text-darkGray">
                  Our menu doesn’t stop there. We offer a wide range of
                  deliciousness!
                </p>
                <a
                  href="#all"
                  className=" underline mt-12 block text-purple text-2xl font-bold"
                >
                  View All!
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <img
              alt="Specialty 2"
              className=""
              src={Pasta}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSpecialties;
