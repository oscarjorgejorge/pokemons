import React, { FC, ReactNode } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  text?: string;
  bg?: string;
  textColor?: string;
  icon?: ReactNode;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    text = "",
    bg = "bg-primary",
    textColor = "text-white",
    icon,
    onClick,
    disabled = false,
    className,
    ...buttonProps
  } = props;

  const renderIcon = icon && (
    <span className="mr-2" color="text-red-500">
      {icon}
    </span>
  );

  return (
    <button
      className={`${textColor} ${bg} py-2 px-4 rounded-lg hover:bg-opacity-80 active:bg-opacity-100 ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...buttonProps}
    >
      <div className="flex items-center font-semibold">
        {renderIcon}
        {text}
      </div>
    </button>
  );
};
