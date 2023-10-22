import { formSchemaType } from "@/schemas/form";
import { UseFormReturn } from "react-hook-form";

type formType = UseFormReturn<
  {
    name: string;
    description?: string | undefined;
  },
  any,
  undefined
>;

type onSubmitType = (values: formSchemaType) => void;

export type createFormType = {
  form: formType;
  onSubmit: onSubmitType;
};
