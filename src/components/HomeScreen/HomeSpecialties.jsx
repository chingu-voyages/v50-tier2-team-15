import Tacos from "../../assets/specialties-left.png";
import Pasta from "../../assets/specialties-right.png";

const HomeSpecialties = () => {
  return (
    <>
      <section className="flex flex-col py-10 md:text-left mt-[110px] justify-center items-center">
        <div className="flex justify-between items-center mx-4">
          <div className="flex flex-col justify-center align-middle">
            <div className="flex flex-col justify-center items-center">
            <h2 className="lg:text-5xl text-3xl font-bold text-purple items-start mt-[100px] mb-8">
            FlavorFinder Specialties
              </h2>
              <span className="block center w-[16%] h-0.5 bg-darkRed md:mt-9 mx-auto"></span>
            </div>
            <div className="md:flex pt-12 md:justify-center md:items-center">
              <div className="md:w-1/3">
                <img
                  alt="Specialty 1"
                  className="md:w-[80%] w-[60%] m-auto p-auto"
                  src={Tacos}
                />
              </div>
              <div className="md:w-2/3 md:text-left md:pr-14 mt-8 md:mt-0">
                <p className="md:text-3xl text-darkGray text-center md:text-left text-2xl">
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
          <div className="md:w-1/4 md:block hidden">
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
