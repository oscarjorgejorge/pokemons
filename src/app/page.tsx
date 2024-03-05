"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/shared/Button";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/pokemons");
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <Image
          alt="pokemon page image"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center space-y-6 sm:p-8">
        <div className="container mx-auto p-2">
          <h1 className="text-3xl font-bold mb-4">Oscar prueba técnica</h1>
          <p className="text-gray-600 mb-2">
            Los primeros días cuando estaba preparando la prueba estaba
            aprendiendo sobre Nextjs es algo que ya queria hacer hace tiempo y
            esta fue la excusa perfecta para no retrasarlo más. Durante la
            prueba he probado a hacer cosas distintas: dinamic routes,
            interceptación de rutas, rutas paralelas, la verdad que Nextjs
            router esta genial. En mis anteriores experiencias desarrollando
            habia utilizado MUI para crear componentes, pero ultimamente estoy
            prefiriendo crear mis propios componentes ya que son fáciles de
            crear. Me he divertido haciendo esta pequeña prueba que os comparto.
          </p>
          <h2 className="text-xl text-gray-600 my-4">Consideraciones</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Primera vez usando Nextjs.</li>
            <li>
              Probé a gestionar los &apos;loadings&apos;, tambien con el
              componente Suspense de React, pero no me funcionó después de la
              primera llamada en el listado de pokemons, cuando usas la
              paginación.
            </li>
            <li>
              Como otra alternativa a la implementación de las evoluciones,
              podría ser interceptando las rutas, y así no perder el contexto
              del pokemon inicial al que se navegó. Pero como en las
              especificaciones decía navegar a una página de pokemon igual, lo
              implemente de esta forma que me resultó más fácil.
            </li>
            <li>
              En la páginación a partir de la página 31, no se porqué no me
              retornan los datos (en Insomnia me funciona correctamente). El
              mismo problema tengo al filtrar por ciertas generaciones.
            </li>
          </ul>
          <h2 className="text-xl text-gray-600 mb-4">TO DO - ideas</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Homogenizar un poco el uso de clases utilizando Tailwindcss, con
              más configuraciones generales. También con algunas
              refactorizaciones de código que hice es posible que se me hayan
              quedado clases que ya no se necesitan o algun html tag
              innecesario.
            </li>
            <li>
              Breadcrumb en la página de pokemon o su evolución para mejorar la
              navegación.
            </li>
            <li>Reseteo de filtros.</li>
            <li>Skeleton selectores de filtro y buscador por nombre.</li>
            <li>
              Quitar paginación si vienen todos los pokemon (cuando aplico un
              filtro por tipo o generación).
            </li>
            <li>
              Lazy load en las imágenes, poniendo una imagen como placeholder si
              no esta cargada la otra imagen.
            </li>
          </ul>
        </div>
        <Button onClick={handleClick} text="See pokemons" />
      </div>
    </>
  );
}
