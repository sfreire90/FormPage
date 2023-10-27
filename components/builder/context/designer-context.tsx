"use client";
import { createContext } from "react";
import { DesignerContextType } from "./designer-context.types";

export const DesignerContext = createContext<DesignerContextType | null>(null);
