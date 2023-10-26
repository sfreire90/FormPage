"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "..";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Campo de texto",
      helperText: "Texto de ayuda",
      required: false,
      placeholder: "Placeholder",
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Campo de texto",
  },
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Designer Component</div>,
  propertiesComponent: () => <div>Designer Component</div>,
};
