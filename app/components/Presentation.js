import React from "react";
import Link from "next/link";

export const Presentation = () => {
  return (
    <section className="lg:px-10 px-2 pt-4 pb-8">
      <div className="mx-auto flex flex-col items-center space-y-8">
        <img
          className="w-28"
          src="https://res.cloudinary.com/draig/image/upload/v1688835318/profile-pic_2_pxpzfg.png"
        />
      </div>
      <div className="flex flex-col space-y-4 text-center">
        <h2 className="text-black  mx-auto   text-2xl font-bold tracking-tight lg:text-3xl">
          Bienveni@ a este espacio de reflexión
        </h2>
        <div className="mx-auto  text-gray-900 lg:text-lg text-md ">
          <p>
            Si te encuentras acá, significa que seguramente sabes quién soy.
            <br />
            Sin embargo daré una breve explicación de porque cree este segmento.
            No soy participe de la autodefinición como método de presentación,
            es decir, prefiero que se me conozca en conversación e interacción
            que en describirme a mí mismo.
            <br />
            Cabe destacar que todo lo aquí presentado es en un 50% de mi
            percepción de las cosas y solo un 50% de objetividad. <br />
            Espero te sea de utilidad y puedas compartir conmigo cualquier
            consulta en este camino llamado vida. <br />{" "}
            <span className="font-bold">
              Los temas que encontrarás en este blog:
            </span>
          </p>
        </div>
        <div className="text-md  font-semibold">
          <p className="mx-auto uppercase">
            Programación, Gestión de proyectos, Quality assurance, Actualidad
            digital, Inteligencia Artificial, Opiniones sobre temas relacionados
            al mundo IT, etc.
          </p>
        </div>
        <div className="-mt-2">
          <p className=" text-gray-900  text-lg">
            Espero puedas llevarte algo de mí en el mejor de los sentidos.
          </p>
          <p className="text-md">Puedes contactarme por mis redes. ;)</p>

          <div className="mt-2">
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
