import { FC } from "react";
import Image from "next/image";

interface PokeBallProps {}

export const PokeBall: FC<PokeBallProps> = (props: PokeBallProps) => {
  return (
    <Image
      alt="pokeball"
      src="https://media.tenor.com/_3R8EL8_DQYAAAAi/pokeball-pokemon.gif"
      width={600}
      height={600}
    />
  );
};
