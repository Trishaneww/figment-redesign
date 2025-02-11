import type { Metadata } from "next";
import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Host_Grotesk({ weight: ["300", "400", "500", "600", "700", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figment Studios ",
  description:
    "We design and develop custom, high-performing websites tailored to help your business stand out and grow.",
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
