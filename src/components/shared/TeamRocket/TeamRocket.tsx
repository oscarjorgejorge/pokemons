import { FC } from "react";
import Image from "next/image";

interface TeamRocketProps {}

export const TeamRocket: FC<TeamRocketProps> = (props: TeamRocketProps) => {
  return (
    <Image
      alt="ash kepchup"
      src="https://i.pinimg.com/originals/0e/b7/2f/0eb72f46736820d493d52a472c331bc5.gif"
      width={600}
      height={600}
    />
  );
};
