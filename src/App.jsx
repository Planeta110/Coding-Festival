import Nav from "./components/topbar/nav";
import "./App.css";
import Imageninicio from "./assets/background/fondoinicio.png";
import Datefestival from "./components/date/Date.jsx";
import Agenda from "./components/agenda/agenda.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <Nav />
      {/* Agrega un padding-top para evitar el solapamiento del navbar */}
      <main className="font-rubik z-20 pt-[120px] flex flex-col items-center px-4">
        <h1 className="text-[#1F2937] z-20  font-black text-3xl sm:text-4xl md:text-6xl text-center">
          Coding Festival
        </h1>
        <p className="text-center z-10  font-medium md:text-3xl md:w-[800px] text-[20px]">
          Este 2025, prepárate para vivir la experiencia definitiva en
          programación. Coding Festival es el evento donde los desarrolladores
          más apasionados se reúnen para compartir conocimientos, innovar y,
          sobre todo, ¡crear! Con talleres, conferencias y hackatones, será el
          lugar perfecto para llevar tus habilidades al siguiente nivel.
        </p>
        <button className="text-[#FFFFFF] z-20 md:mt-16 mt-12 font-bold hover:bg-[#dae035] hover:animatie-hoversfd transition-all active:animate-pings bg-[#E0DD35] md:text-2xl cursor-pointer pb-6 pt-6 md:pr-12 md:pl-12 pl-8 pr-8">
          Comprar entradas
        </button>
        <Datefestival />
        <Agenda />
        <Footer />
      </main>
      <img
        src={Imageninicio}
        className="aspect-auto w-full absolute top-[200px] md:top-[50px]"
        alt="Fondo"
      />
    </>
  );
}

export default App;
