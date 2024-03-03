"use client";

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Slot from "./Slot";
import { cn } from "@app/app/lib/utils";

// Define button variants using class-variance-authority
const buttonVariants = cva(
  'inline-flex justify-center items-center  rounded font-["Source Sans 3"]',
  {
    variants: {
      variant: {
        default:
          "text-gray-600 border shadow border-slate-300 hover:bg-slate-50 focused:text-gray-600 disabled:text-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none",

        primary: "bg-[#155C9B] text-white hover:bg-[#1E77C8]",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-3 py-2 text-sm leading-tight",
        md: "h-10 px-3.5 py-2.5 text-sm leading-tight",
        lg: "h-12 px-4 py-2.5 text-base leading-normal",
        xl: " h-14 px-[22px] py-4 text-lg leading-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define the ButtonProps interface
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  asChild?: boolean;
  busy?: boolean;
  label?: string;
}

// Define the Button component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      label,
      leadingIcon,
      trailingIcon,
      busy = false,
      children,
      ...props
    },
    ref
  ) => {
    // Use a Slot or a button based on the asChild prop
    const Comp = asChild ? Slot : "button";

    // Generate classNames using class-variance-authority and additional classes
    const buttonClassNames = cn(buttonVariants({ variant, size, className }));

    return (
      <Comp className={buttonClassNames} ref={ref} disabled={busy} {...props}>
        {children}
        <div className="flex items-center gap-1.5 justify-center whitespace-nowrap">
          {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
          {label}
          {busy ? (
            <div>...</div>
          ) : (
            trailingIcon && <span className="ml-2">{trailingIcon}</span>
          )}
        </div>
      </Comp>
    );
  }
);

// Set the display name for the Button component
Button.displayName = "Button";

// Export the Button component and buttonVariants
export { Button, buttonVariants };
