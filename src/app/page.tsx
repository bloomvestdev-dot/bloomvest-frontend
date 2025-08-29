// src/app/page.tsx
import HomePageContent from "@/components/HomePageContent";
import { LanguageProvider } from "@/context/LanguageContext";

export default function HomeRoute() {
  return (
    <LanguageProvider>
      <HomePageContent />
    </LanguageProvider>
  );
}
