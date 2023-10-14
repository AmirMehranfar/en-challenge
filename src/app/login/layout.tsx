import EmptyLayout from "@/layouts/EmptyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <EmptyLayout>{children}</EmptyLayout>;
}
