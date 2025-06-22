import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata: Metadata = {
  title: "GLitch",
  description: "a project management web app for all projet carrier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en" data-theme="light">
      <body
        
>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
