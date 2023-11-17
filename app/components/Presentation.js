import React from "react";

import { SocialMedias } from "./SocialMedias";
import Link from "next/link";

export const Presentation = () => {
  return (
    <section className="pl-10 pr-10 pt-8 pb-10">
      <div className="mx-auto flex flex-col items-center space-y-8">
        <img
          className="w-28"
          src="https://res.cloudinary.com/draig/image/upload/v1688835318/profile-pic_2_pxpzfg.png"
        />
      </div>
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="text-black  pb-8 mx-auto my-2 max-w-md text-2xl font-bold tracking-tight md:text-3xl">
          Bienveni@ a este espacio de reflexión
        </h2>
        <div className="mx-auto max-w-md text-gray-900 md:text-lg">
          <p>
            Si te encuentras acá, significa que seguramente sabes quién soy.
          </p>
          <p>
            Sin embargo daré una breve explicación de porque cree este segmento.
            No soy participe de la autodefinición como método de presentación,
            es decir, prefiero que se me conozca en conversación e interacción
            que en describirme a mí mismo.
          </p>

          <p>
            Cabe destacar que todo lo aquí presentado es en un 50% de mi
            percepción de las cosas y solo un 50% de objetividad.
          </p>
          <p>
            Espero te sea de utilidad y puedas compartir conmigo cualquier
            consulta en este camino llamado vida. Los temas que encontrarás en
            este blog:
          </p>
        </div>
        <div className="text-[1.3em] pt-4 pb-4  font-semibold">
          <ul>
            <li>- Programación</li>
            <li>- Gestión de proyectos</li>
            <li>- Quality assurance</li>
            <li>- Actualidad digital</li>
            <li>- Inteligencia Artificial</li>
            <li>- Opiniones sobre temas relacionados al mundo IT</li>
          </ul>
        </div>
        <div>
          <p className="mx-auto  text-gray-900 md:text-2xl">
            Espero puedas llevarte algo de mí en el mejor de los sentidos.
          </p>
          <p className="text-2xl">Puedes contactarme por mis redes. ;)</p>

          <div className="mt-5">
            <Link href="/blog">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-[#0065B3] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Empezar
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
