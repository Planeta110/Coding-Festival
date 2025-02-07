import ImagenJS from "../../assets/others/Js.png";
import ImagenReact from "../../assets/others/React.png";
import ImagenSql from "../../assets/others/sql.png";

export default function orden({ nombre, fecha, uimg }) {
  let usrlimg = [ImagenJS, ImagenReact, ImagenSql];

  return (
    <div className="bg-[#1E3A8A] h-[150px] text-[#FFFFFF] md:ml-0 ml-[5%] mt-5 w-[90%] md:w-[700px] lg:w-[1000px] flex flex-col items-center justify-center text-center">
      {/* Contenedor en fila para el texto y la imagen */}
      <div className="flex flex-row items-center gap-4">
        <h1 className="max-w-[900px] text-[12px] md:text-4xl">
          {nombre} {fecha}
        </h1>

        <img
          src={usrlimg[uimg]}
          alt="Imagen del evento"
          className="w-[100px] h-[100px] mr-4 lg:ml-10 object-contain aspect-square"
        />
      </div>
    </div>
  );
}
