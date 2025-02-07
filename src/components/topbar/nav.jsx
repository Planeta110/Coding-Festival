import Ahref from "./a.jsx";

export default function Nav() {
  return (
    <nav className="bg-[#60a5faa0] fixed top-0 w-full h-[80px] flex items-center z-50 backdrop-blur-sm opacity-90 px-5">
      <h1 className="font-black text-white text-[22px] md:text-[28px]">
        Coding Festival
      </h1>
      <div className="flex-1 flex justify-start gap-2">
        <Ahref goto="Inicio" url="/" />
        <Ahref goto="Fecha" url="/#date" />
        <Ahref goto="Lugar" url="/#date" />
        <button className="text-white absolute hidden md:block cursor-pointer top-4 right-8 bg-[#f3ef13] px-5 py-3">
          Entradas
        </button>
      </div>
    </nav>
  );
}
