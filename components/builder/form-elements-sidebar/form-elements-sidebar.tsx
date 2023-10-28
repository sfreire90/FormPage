import React from "react";
import { FormElements, SidebarBtnElement } from "..";

export function FormElementsSidebar() {
  return (
    <div>
      DesignerSidebar
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
}
