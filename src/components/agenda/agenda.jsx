import Orden from "./orden";

export default function Agenda() {
    return (
      <section className="absolute mt-[1830px] xl:mt-[2050px] md:mt-[1950px] font-black text-3xl md:text-5xl">
        <h1 className="">ORDEN DEL PROGRAMA</h1>
        <Orden nombre={"HACKATON DE REACT "} fecha={"11:30 - 14:30"} uimg={1} />
        <Orden nombre={"CHARLA JAVASCRIPT "} fecha={"14:30 - 15:45"} uimg={0} />
        <Orden nombre={"BASES DE DATOS   "} fecha={"15:45 - 16:30"} uimg={2} />
        <Orden nombre={"SORPRESA "} fecha={"??:?? - ??:??"} uimg={1} />
      </section>
    );
}