import type { Metadata } from "next";

import { LayoutRoot } from "@/components/layout/layout-root";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "DesenvolvePsi",
  description: "Fundacao visual do projeto DesenvolvePsi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <LayoutRoot>{children}</LayoutRoot>
      </body>
    </html>
  );
}
