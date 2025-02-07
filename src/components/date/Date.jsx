import Imagenrel from "../../assets/background/fsdafondo.png";
import Imagenrelright from "../../assets/background/fondodondeylugar.png";
import Imagenabajo from "../../assets/background/debajodelcuadroraro.png";
import { useState, useEffect } from "react";

export default function Datefestival() {
  const [datedia, setDatedia] = useState(1);
  const [datehora, setDatehora] = useState(12);
  const [datemes, setDatemes] = useState(5);

  useEffect(() => {
    const date = new Date();
    const datedianow = date.getUTCDate();
    const datehoranow = date.getHours();
    const datemesnow = date.getMonth() + 1;

    

    setDatedia(Math.abs(datedianow - 15));
    setDatehora(Math.abs(datehoranow - 12));
    setDatemes(Math.abs(datemesnow - 4));
    if (datemes > 12) {
      setDatemes(0);
      setDatehora(0);
      setDatedia(0);
    }
   
  });

  return (
    <>
      <div className="bg-[#1E3A8A] w-full absolute z-20 mt-[600px] md:mt-[700px] h-[1100px]">
        <div className="bg-[#F9FAFB] mt-[40px] md:w-[95%] w-[90%] m-auto h-[640px] md:h-[500px] flex flex-col items-center justify-start">
          {/* El texto FECHA está aislado */}
          <h1 className="text-center text-6xl font-medium text-[#1F2937] mt-[20px]">
            FECHA
          </h1>

          <div className=" md:mr-[420px] lg:mr-[500px] xl:mr-[60%]">
            <img
              src={Imagenrel}
              alt="Si no carga, recarga"
              className=" h-[250px] md:w-[300px] mt-5  md:mt-0 lg:w-[400px] lg:h-[400px] object-center aspect-auto"
            />
            <div className="absolute mt-[-225px] ml-[13px] lg:mt-[-365px]">
              <h1 className="font-normal text-2xl">Cuando ?</h1>
              <h1 className="font-extrabold text-6xl text-[#000000] max-w-[200px]">
                15 de ABRIL
              </h1>
            </div>
          </div>
          <div className=" md:mt-[-266px] lg:mt-[-418px] md:ml-[420px] lg:ml-[500px] xl:ml-[60%]">
            <img
              src={Imagenrelright}
              alt="Si no carga, recarga"
              className=" mt-5  h-[250px] md:w-[300px]   lg:w-[400px] lg:h-[400px] object-center aspect-auto"
            />
            <div className="absolute mt-[-225px] ml-[13px] lg:mt-[-365px]">
              <h1 className="font-normal text-2xl">Donde ?</h1>
              <h1 className="font-extrabold text-5xl lg:text-6xl text-[#000000] max-w-[200px]">
                Zaragoza, España
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAFB] z-30 mt-[40px] md:w-[95%] w-[90%] m-auto h-[290px] md:h-[320px] flex flex-col items-center justify-start">
          <h1 className="text-[#1F2937] md:text-5xl text-3xl font-medium mt-2">
            TIEMPO RESTANTE
          </h1>
          <h2 className="text-[#1F2937] font-extrabold mt-5 lg:text-8xl md:text-6xl text-4xl">
            {datedia}d {datehora}h y {datemes} més
          </h2>
        </div>
      </div>
      <img
        className="w-full absolute mt-[1600px] -z-30 xl:mt-[1400px]"
        src={Imagenabajo}
        alt="Cuanto es 1 + 1"
      />
    </>
  );
}
