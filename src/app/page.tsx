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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper ipsum eget nibh vestibulum, nec consequat justo
            pulvinar. Donec id tempor nisi, vel finibus elit. Nullam auctor
            ultricies magna vitae fermentum. Nam nec placerat libero. Ut
            sollicitudin, libero ac fermentum aliquam, justo velit posuere
            turpis, eget molestie velit quam vel lacus. In eget lobortis felis.
            Vestibulum suscipit neque eget lacus pellentesque, in convallis enim
            condimentum. Vivamus quis nulla id enim faucibus hendrerit vel nec
            elit. Cras molestie tristique justo, nec ullamcorper tellus mollis
            nec. Fusce sit amet fringilla urna. Nullam non nunc eget elit dictum
            fermentum.
          </p>
          <h2 className="text-xl text-gray-600 mb-4">Consideraciones</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Primera vez usando Nextjs</li>
            <li>
              Probé a gestionar los &apos;loadings&apos;, tambien con el
              componente Suspense de React, pero no me funcionó después de la
              primera llamada en el listado de pokemons, cuando usas la
              paginación
            </li>
            <li>
              Como otra alternativa a la implementación de las evoluciones,
              podría ser interceptando las rutas, y así no perder el contexto
              del pokemon inicial al que se navegó. Pero como en las
              especificaciones decía navegar a una página de pokemon igual, lo
              implemente de esta forma que me resultó más facil
            </li>
            <li>
              En la páginación a partir de la página 31, no se porqué no me
              retornan los datos (en Insomnia me funciona correctamente). El
              mismo problema tengo al filtrar por ciertas generaciones.
            </li>
          </ul>
          <h2 className="text-xl text-gray-600 mb-4">TO DO</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Breadcrumb en la página de pokemon o su evolución para mejorar la
              navegación
            </li>
            <li>Reseteo de filtros</li>
            <li>Lazy load en las imágenes</li>
          </ul>
        </div>
        <Button onClick={handleClick} text="See pokemons" />
      </div>
    </>
  );
}
