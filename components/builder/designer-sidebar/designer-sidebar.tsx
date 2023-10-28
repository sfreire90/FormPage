import React from "react";
import { FormElementsSidebar, PropertiesFormSidebar } from "..";
import { useDesigner } from "@/hooks/use-designer";

export function DesignerSidebar() {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted rounded-tl-lg p-4 bg-background overflow-y-auto h-full">
      {!selectedElement && <FormElementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
    </aside>
  );
}
