import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "DesenvolvePsi",
  description: "Fundacao tecnica do projeto DesenvolvePsi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
