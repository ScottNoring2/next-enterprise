'use client'

import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "utils/cn";
import { MouseEvent } from 'react';

const button = cva(
  [],
  {
    variants: {
      intent: {
        primary: ["button-primary"],
        secondary: ["button-secondary"],
        tertiary: ["button-tertiary"]
      },
      size: {
        xsm: ["xs:button-size-xsm"],
        sm: ["button-size-sm","sm:text-red-0","xs:text-red-0"],
        lg: ["button-size-lg"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
  underline?: boolean;
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(button({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, button };
