import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VCGL | Innovation Across Industries",
  description: "Vethan Concepts Group Limited is a diversified Nigerian group creating practical value across science, energy, technology, and experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
