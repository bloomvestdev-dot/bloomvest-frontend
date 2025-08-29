import type { Metadata } from "next";
import "./globals.css";
import { getGlobalSettings } from "@/data/loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Bloovest",
  description: "Empower Your Financial Future",
};

async function loader() {
  const { data } = await getGlobalSettings();
  if (!data) throw new Error("Failed to fetch global settings");
  return { header: data?.header, footer: data?.footer };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { header, footer } = await loader();
  return (
    <LanguageProvider>
      <html lang="fa">
        <body className={` antialiased`}>
          {" "}
          <Header data={header} />
          {children}
          <Footer data={footer} />
        </body>
      </html>
    </LanguageProvider>
  );
}
