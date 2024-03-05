import { FC } from "react";
import Image from "next/image";

interface AshKepchupProps {}

export const AshKepchup: FC<AshKepchupProps> = (props: AshKepchupProps) => {
  return (
    <Image
      alt="ash kepchup"
      src="https://media1.giphy.com/media/NHeIvfYU9f9hC/200w.gif?cid=6c09b952s644gaod2l8j3ahldf910ar0y83xo7g3wwo683e2&ep=v1_gifs_search&rid=200w.gif"
      width={600}
      height={600}
    />
  );
};
