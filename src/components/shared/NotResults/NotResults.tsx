import React from "react";

type AlertProps = {
  text: string;
};

export function Alert({ text }: AlertProps) {
  return <div className="bg-primary-light p-2 rounded-md">{text}</div>;
}
