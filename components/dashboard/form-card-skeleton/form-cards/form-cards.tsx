import { getForms } from "@/actions/form";

export async function FormCards() {
  const forms = await getForms();
}
