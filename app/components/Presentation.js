import React from "react";

import { SocialMedias } from "./SocialMedias";
import Link from "next/link";

export const Presentation = () => {
  return (
    <section className="flex flex-col lg:flex-row pl-10 pr-10 pt-8 pb-10">
      <div className="lg:w-3/4">
        <h2 className="text-black text-4xl pb-8">
          Bienveni@ a este espacio de reflexión
        </h2>
        <div className="text-2xl">
          <p>
            Si te encuentras acá, significa que sabes quién soy. Sin embargo
            daré una breve explicación de porque cree este segmento. No soy
            participe de la autodefinición como método de presentación, es
            decir, prefiero que se me conozca en conversación e interacción que
            en describirme a mí mismo.
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
        <div className="text-[1.3em] pt-4 pb-4 font-semibold">
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
          <p className="text-2xl">
            Espero puedas llevarte algo de mí en el mejor de los sentidos.
          </p>
          <p className="text-2xl">Puedes contactarme por mis redes. ;)</p>
          <div className="pt-6">
            <SocialMedias />
            <div className="mt-5">
              <Link href="/blog">
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-3 bg-[#0065B3] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Ver los posts
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="https://res.cloudinary.com/dcu06etml/image/upload/v1689726762/portolio-personal/oowc4bvwjfh0dcwy28e1.webp"
          alt="Imagen del blog"
          className="w-full"
        />
      </div>
    </section>
  );
};
