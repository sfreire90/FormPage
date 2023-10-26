import { Button } from "@/components/ui/button";
import React from "react";
import { MdPreview } from "react-icons/md";

export function PreviewDialogBtn() {
  return (
    <Button variant={"outline"} className="gap-2">
      <MdPreview className="h-4 w-4" />
      Vista Previa
    </Button>
  );
}
