import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/tailwind";
type Props = PropsWithChildren<{
  className: string;
}>;
const Button: FC<Props> = ({
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={cn(
        className,
        "px-4 py-6 rounded-sm inline-block text-center text-white text-2xl font-semibold font-['Source Sans Pro']"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
