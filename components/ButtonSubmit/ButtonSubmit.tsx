"use client";

import { FormEvent, type ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [],
  {
    variants: {
      intent: {
        primary: ["button-primary"],
        secondary: ["button-secondary"],
        tertiary: ["button-tertiary"],
        navItem: ["button-navItem"]
      },
      size: {
        xsm: ["button-size-xsm"],
        sm: ["button-size-sm"],
        lg: ["button-size-lg"],
        navItem: ["button-navItem-size"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)


export interface ButtonSubmitProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof button> {
  pendingText?: string;
  formAction?: any;
}

export function ButtonSubmit({ className, intent, size, underline, pendingText = "Submitting...", ...props }: ButtonSubmitProps) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </button>
  )
}
