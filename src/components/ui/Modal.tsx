"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  // DialogTrigger,
} from "./dialog";
import { ContentSize } from "@app/types";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-carbon/close";

import { Separator } from "./separator";
import { cn } from "@app/lib/utils";

const widthKind = {
  sm: "w-[500px]",
  md: "w-[700px]",
  lg: "w-[900px]",
  xl: "w-[1100px]",
  "2xl": "w-[1300px]",
  full: "w-full",
};

interface IModal {
  open: boolean;
  size: ContentSize;
  children?: React.ReactNode | React.JSX.Element;
  title?: string;
  showDivider?: boolean;
  overLayClassName?: string;
  closeModal: () => void;
}

const Modal: React.FC<IModal> = ({
  open,
  size,
  children,
  showDivider = true,
  title,
  overLayClassName,
  closeModal,
}) => {
  return (
    <Dialog open={open}>
      <DialogOverlay className={cn("bg-black bg-opacity-10", overLayClassName)}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent
          className={`${widthKind[size]} flex flex-col max-h-[96vh] `}
        >
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>{title}</DialogTitle>
              <button type="button" onClick={closeModal}>
                <Icon icon={closeIcon} />
              </button>
            </div>
            <Separator />
          </DialogHeader>
          {/* <DialogDescription className=""> */}
          {/* <ScrollSection className="flex-grow h-full w-full"> */}
          {children}
          {/* </ScrollSection> */}
          {/* </DialogDescription> */}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Modal;
