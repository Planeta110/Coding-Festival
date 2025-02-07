// Ahref.js (o a.jsx)
import PropTypes from "prop-types";

export default function Ahref({ goto, url }) {
  return (
    <a href={url} className="text-white text-[22px] ml-2 font-medium md:ml-16">
      {goto}
    </a>
  );
}

Ahref.propTypes = {
  goto: PropTypes.string.isRequired, // Se espera que 'goto' sea una cadena de texto
  url: PropTypes.string.isRequired, // Se espera que 'url' sea una cadena de texto
};
