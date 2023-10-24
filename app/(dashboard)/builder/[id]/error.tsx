"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-6 w-full h-full items-center justify-center">
      <h2 className="text-destructive text-3xl">Algo ha salido mal!</h2>
      <Button asChild>
        <Link href={"/"}>Volver</Link>
      </Button>
    </div>
  );
}
