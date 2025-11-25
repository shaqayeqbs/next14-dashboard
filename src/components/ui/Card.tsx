"use client";

import {
  Card as NextUICard,
  CardHeader as NextUICardHeader,
  CardBody as NextUICardBody,
  CardFooter as NextUICardFooter,
} from "@nextui-org/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

// Extract props from NextUI components using ComponentProps
type CardProps = ComponentProps<typeof NextUICard>;
type CardHeaderProps = ComponentProps<typeof NextUICardHeader>;
type CardBodyProps = ComponentProps<typeof NextUICardBody>;
type CardFooterProps = ComponentProps<typeof NextUICardFooter>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <NextUICard ref={ref} className={cn(className)} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <NextUICardHeader ref={ref} className={cn(className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <NextUICardBody ref={ref} className={cn(className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <NextUICardFooter ref={ref} className={cn(className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
export type {
  CardProps,
  CardHeaderProps,
  CardBodyProps as CardContentProps,
  CardFooterProps,
};
