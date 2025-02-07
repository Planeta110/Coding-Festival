import Fondofotter from "../../assets/background/Fondofotter.png";

export default function Footer() {
  return (
    <div className="relative w-full mt-[2300px] md:mt-[2400px]">
      <img
        src={Fondofotter}
        alt="Fondofooter"
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover -z-10"
      />
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-[13px] md:text-[20px] w-[90%] md:w-[80%] lg:w-[70%]">
        Esta web no tiene nada que ver con cualquier evento que se llame así. El
        desarrollador no tiene ninguna responsabilidad. Este evento no existe al
        menos que haya alguno que se llame así. Página creada por{" "}
        <b className="text-[#78B8FC]">https://github.com/Planeta110</b>
      </h2>
    </div>
  );
}
