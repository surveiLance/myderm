import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyDerm Clinic — Private Concept Preview",
  description: "A private website concept for MyDerm Aesthetics & Dermatology Clinic.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
