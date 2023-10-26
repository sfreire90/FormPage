import React from "react";
import { FormElements, SidebarBtnElement } from "..";

export function DesignerSidebar() {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted rounded-tl-lg p-4 bg-background overflow-y-auto h-full">
      DesignerSidebar
      <SidebarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
}
