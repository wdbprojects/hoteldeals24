import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/components/shared/fonts";
import { cn } from "@/lib/utils";
import { GlobalProvider } from "./GlobalProvider";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: { template: "%s | Hotel Deals", default: "Hotel Deals" },
  description: "Best hotel deals app built with Next.js and ShadCN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-brackground font-sans antialiased",
          montserrat.variable,
        )}
      >
        <GlobalProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
