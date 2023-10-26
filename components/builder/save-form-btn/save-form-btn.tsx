import { Button } from "@/components/ui/button";
import React from "react";
import { HiSaveAs } from "react-icons/hi";

export function SaveFormBtn() {
  return (
    <Button variant={"outline"} className="gap-2">
      <HiSaveAs className="h-4 w-4" />
      Guardar
    </Button>
  );
}
