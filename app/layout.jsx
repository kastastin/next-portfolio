import { Outfit } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lang/LanguageContext";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Kastastin | Portfolio",
  description:
    "Explore my portfolio, showcasing my skills and projects as a web developer. Designed with Next.js and Tailwind CSS, this site highlights my expertise in creating dynamic and responsive web applications. Discover my work and get in touch!",
  icons: { icon: "/logo.svg" },
};

const RootLayout = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={outfit.className}>
      <LanguageProvider>
        <ThemeProvider attribute="class" defaulTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </LanguageProvider>

      <Toaster />
    </body>
  </html>
);

export default RootLayout;
