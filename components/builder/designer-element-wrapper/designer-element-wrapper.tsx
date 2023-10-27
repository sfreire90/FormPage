import React from "react";
import { FormElementInstance, FormElements } from "..";

export function DesignerElementWrapper({
  element,
}: {
  element: FormElementInstance;
}) {
  const DesignerElement = FormElements[element.type].designerComponent;

  return <DesignerElement elementInstance={element} />;
}
