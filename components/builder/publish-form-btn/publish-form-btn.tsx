import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlinePublish } from "react-icons/md";

export function PublishFormBtn() {
  return (
    <Button className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400">
      <MdOutlinePublish className="h-4 w-4" />
      Publicar
    </Button>
  );
}
