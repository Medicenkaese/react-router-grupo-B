import React from "react";
import { Link } from "react-router-dom";
import "./SobreNosotros.css";
const SobreNosotros = () => {
  return (
    <section class="contenedorInformacion">
      <h1 class="nombre font-poppins">SOBRE NOSOTROS</h1>
      <div className="texto font-poppins bg-gradient-to-b from-pink-100 to-pink-300">
        <div class="contenedor">
          <h2 className="titulo text-3xl font-bold text-pink-600">BEAUTY GLOW</h2>
          <p>
            Creemos que todos merecen sentirse seguros y bellos sin comprometer
            su presupuesto. Nos dedicamos a ofrecer productos de maquillaje de
            la más alta calidad a precios que realmente puedes permitirte.
            Queremos que cada cliente, sin importar su situación, pueda acceder
            a la belleza y la confianza que merecen.
          </p>

          <h3 className="subtitulo font-bold">Nuestra historia</h3>
          <p>
            Comenzó con un simple deseo: empoderar a las personas a través de la
            belleza. Desde entonces, hemos crecido, pero nuestra misión sigue
            siendo la misma: inspirar confianza y autoexpresión a través de
            productos de calidad.
          </p>
          <h3 className="subtitulo font-bold">Únete a Nuestra Comunidad</h3>
          <p>
            Te invitamos a ser parte de nuestra familia. Síguenos en nuestras
            redes sociales para estar al tanto de las últimas novedades, ofertas
            exclusivas y consejos de belleza. Juntos, ¡vamos a celebrar la
            belleza en todas sus formas!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
