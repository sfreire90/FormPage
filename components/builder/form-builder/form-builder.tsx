"use client";
import { Form } from "@prisma/client";
import React from "react";
import { PreviewDialogBtn, PublishFormBtn, SaveFormBtn } from "..";

export function FormBuilder({ form }: { form: Form }) {
  return (
    <main className="flex flex-col w-full">
      <div className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2">Formulario:</span>
          {form.name}
        </h2>
        <div className="flex items-center gap-2">
          <PreviewDialogBtn />
          {!form.published && (
            <>
              <SaveFormBtn />
              <PublishFormBtn />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
