import type { Metadata } from "next";
import "../globals.css";
import { getGlobalSettings } from "@/data/loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Bloovest",
  description: "Empower Your Financial Future",
};

async function loader(lang: "en" | "fa") {
  const { data } = await getGlobalSettings(lang);
  if (!data) throw new Error("Failed to fetch global settings");
  return { header: data?.header, footer: data?.footer };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "fa" }>;
}>) {
  const { lang } = await params;
  const { header, footer } = await loader(lang);
  return (
    <LanguageProvider initialLanguage={lang}>
      <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
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
