import { FC } from "react";

interface SmallTextProps extends React.ComponentPropsWithoutRef<"p"> {
  text: string;
}

export const SmallText: FC<SmallTextProps> = (props: SmallTextProps) => {
  const { text, className, ...textProps } = props;
  return (
    <p className={`text-xs ${className}`} {...textProps}>
      {text}
    </p>
  );
};
