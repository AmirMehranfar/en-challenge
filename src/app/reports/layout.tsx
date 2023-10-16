"use client";

import MainLayout from "@/layouts/MainLayout/Layout";
import { JSXElementConstructor, ReactElement } from "react";

export default function ReportLayout({
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  return (
    <>      
      <MainLayout>{children}</MainLayout>
    </>
  );
}
