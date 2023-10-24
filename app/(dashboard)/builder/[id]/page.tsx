import { getFormById } from "@/actions/form";
import { FormBuilder } from "@/components/builder";
import React from "react";

export default async function BuilderPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const form = await getFormById(Number(id));
  if (!form) throw new Error("Form not found");

  return <FormBuilder form={form} />;
}
