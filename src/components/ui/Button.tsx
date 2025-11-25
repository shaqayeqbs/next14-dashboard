"use client";

import { Button as NextUIButton } from "@nextui-org/react";
import type { ButtonProps as NextUIButtonProps } from "@nextui-org/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends NextUIButtonProps {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return <NextUIButton ref={ref} className={cn(className)} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
