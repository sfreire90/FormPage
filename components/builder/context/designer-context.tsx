"use client";

import { ReactNode, createContext, useState } from "react";
import { DesignerContextType } from "./designer-context.types";
import { FormElementInstance } from "..";

export const DesignerContext = createContext<DesignerContextType | null>(null);

export function DesignerContextProvider({ children }: { children: ReactNode }) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElement = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
      }}
    >
      {children}
    </DesignerContext.Provider>
  );
}
