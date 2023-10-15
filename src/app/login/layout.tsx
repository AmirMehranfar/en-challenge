"use client";
import EmptyLayout from "@/layouts/EmptyLayout";
import { JSXElementConstructor, ReactElement } from "react";

export default function LoginLayout({
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  return <EmptyLayout>{children}</EmptyLayout>;
}
