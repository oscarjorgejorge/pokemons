import React, { FC } from "react";

type AlertProps = {
  text: string;
};

export const Alert: FC<AlertProps> = ({ text }: AlertProps) => (
  <div className="bg-primary-light p-2 rounded-md">{text}</div>
);
