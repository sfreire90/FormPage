import { getForms } from "@/actions/form";
import { FormCard } from "./form-card/form-card";

export async function FormCards() {
  const forms = await getForms();
  
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}
