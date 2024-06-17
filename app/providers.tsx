"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { ToastContainer } from 'react-toastify';

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const { theme } = useTheme()
  return (
    // eslint-disable-next-line @typescript-eslint/unbound-method
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={false}
          pauseOnHover={false}
          hideProgressBar={false}
          theme={theme === 'dark' ? 'dark' : 'light'}
          newestOnTop={false}
          rtl={false}
        />        
        </NextThemesProvider>
    </NextUIProvider>
  );
}
