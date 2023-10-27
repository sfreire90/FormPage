"use client";
import { DesignerContext } from "@/components/builder/context";
import React, { useContext } from "react";

export function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context)
    throw new Error("useDesigner must be used within a DesignerContext");

  return context;
}
