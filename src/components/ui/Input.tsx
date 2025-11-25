"use client";

import { Input as NextUIInput } from "@nextui-org/react";
import type { InputProps as NextUIInputProps } from "@nextui-org/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends NextUIInputProps {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <NextUIInput ref={ref} className={cn(className)} {...props} />;
  }
);
Input.displayName = "Input";

export { Input };
export type { InputProps };
