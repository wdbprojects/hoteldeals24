"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <SessionProvider>{children}</SessionProvider>
        <Toaster richColors closeButton />
      </ThemeProvider>
    </>
  );
};
