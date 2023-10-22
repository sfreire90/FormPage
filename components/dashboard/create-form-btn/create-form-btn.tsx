"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateForm } from "./create-form/create-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImSpinner2 } from "react-icons/im";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { toast } from "@/components/ui/use-toast";
import { formSchema, formSchemaType } from "@/schemas/form";
import { createForm } from "@/actions/form";

export function CreateFormBtn() {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: formSchemaType) {
    try {
      const formId = await createForm(values);
      toast({
        title: "Éxito",
        description: "Formulario Creado",
      });
      console.info("FORM ID: ", formId);
    } catch (error) {
      toast({
        title: "Error",
        description: "Algo salió mal, por favor inténtelo más tarde",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="group bg-background border border-primary/20 h-48 items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4"
        >
          <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
          <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">
            Crear nuevo formulario
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear formulario</DialogTitle>
          <DialogDescription>
            Crear un nuevo formulario para comenzar a recoger respuestas
          </DialogDescription>
        </DialogHeader>
        <CreateForm form={form} onSubmit={onSubmit} />
        <DialogFooter>
          <Button
            disabled={form.formState.isSubmitting}
            className="w-full mt-4"
            onClick={form.handleSubmit(onSubmit)}
          >
            {!form.formState.isSubmitting && <span>Guardar</span>}
            {form.formState.isSubmitting && (
              <ImSpinner2 className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
