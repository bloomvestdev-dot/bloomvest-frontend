// src/context/LanguageContext.tsx
"use client";

import { createContext, useState, useContext, useEffect } from "react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

// You can define your translations here or import them from a separate file.
const translations = {
  en: {
    // General UI
    "read-more": "Read More",
    "load-more": "Load More",
    "search-matches": "Search Matches",
    "all": "All",
    "free": "Free",
    "loading": "Loading...",
    "please-wait": "Please wait while we load the content",
    
    // Error messages
    "error": "Error",
    "try-again": "Try again",
    "go-to-home": "Go to Home",
    "go-back": "Go Back",
    "error-details": "Error Details",
    "something-went-wrong": "Something went wrong!",
    "unexpected-error": "We encountered an unexpected error. Please try again.",
    "page-not-found": "404 - Page Not Found",
    "page-not-found-desc": "Sorry, we couldn't find the page you're looking for.",
    "component-error": "This component encountered an error. Please try again.",
    
    // Form and actions
    "search": "Search",
    "submit": "Submit",
    "cancel": "Cancel",
    "save": "Save",
    "edit": "Edit",
    "delete": "Delete",
    "close": "Close",
    
    // Navigation
    "home": "Home",
    "back": "Back",
    "next": "Next",
    "previous": "Previous",
    
    // Status messages
    "success": "Success",
    "warning": "Warning",
    "info": "Information",
    "no-data": "No data available",
    "no-results": "No results found",
    
    // Common phrases
    "click-here": "Click here",
    "learn-more": "Learn More",
    "view-all": "View All",
    "show-more": "Show More",
    "show-less": "Show Less",
    
    // Collaboration Form
    "collaboration-form": "Collaboration Form",
    "broker-registration": "Broker Registration",
    "collaboration-description": "Help us understand your background and interests for potential collaboration.",
    "broker-description": "Register with our partnered broker to access all our services.",
    "basic-information": "Basic Information",
    "name": "Name",
    "age": "Age",
    "phone": "Phone",
    "email": "Email",
    "city-country": "City and country of residence",
    "current-occupation": "Current occupation",
    "financial-expectation": "What is your financial expectation from this collaboration?",
    "social-media-accounts": "Please share your active social media accounts (Instagram, Telegram, LinkedIn, etc.)",
    "enter-full-name": "Enter your full name",
    "enter-age": "Enter your age",
    "enter-phone": "Enter your phone number",
    "enter-email": "Enter your email address",
    "enter-city-country": "e.g., New York, USA",
    "enter-occupation": "Enter your current occupation",
    "describe-expectations": "Please describe your financial expectations...",
    "list-social-media": "Please list your social media accounts...",
    "select-option": "Select an option",
    "submit-collaboration": "Submit Collaboration Form",
    
    // Questions
    "q4": "4. How familiar are you with financial markets?",
    "q5": "5. What is your trading experience?",
    "q6": "6. How well do you understand risk management?",
    "q7": "7. How familiar are you with basic trading terms such as lot, pip, leverage?",
    "q8": "8. Which interests you more?",
    "q9": "9. What is your main motivation for collaborating with Bloomvest?",
    "q10": "10. How much experience do you have in marketing or referrals?",
    "q11": "11. How many hours per day can you dedicate to this collaboration?",
    "q12": "12. Which is more important for you?",
    "q13": "13. When do you expect to start earning from this collaboration?",
    "q14": "14. Your current monthly income",
    "q17": "17. If initial training is required, how would you respond?",
    "q18": "18. How would you prefer to introduce Bloomvest?",
    
    // Options
    "no-knowledge": "No knowledge",
    "somewhat-familiar": "Somewhat familiar",
    "confident-understanding": "Confident understanding",
    "no-experience": "No experience",
    "less-than-1-year": "Less than 1 year",
    "more-than-1-year": "More than 1 year",
    "dont-know-risk": "I don't know what it is",
    "know-basics": "I know the basics",
    "apply-practice": "I can apply it in practice",
    "not-at-all": "Not at all",
    "heard-some": "I've heard some",
    "fully-familiar": "Fully familiar",
    "learning-trade": "Learning to trade",
    "referring-networking": "Referring and networking",
    "both": "Both",
    "side-income": "Side income",
    "learning-experience": "Learning and experience",
    "professional-career": "Building a professional career",
    "none": "None",
    "some": "Some",
    "professional-experience": "Professional experience",
    "less-1-hour": "Less than 1 hour",
    "1-3-hours": "1–3 hours",
    "more-3-hours": "More than 3 hours",
    "quick-income": "Quick income",
    "long-term-income": "Long-term stable income",
    "less-1-month": "Less than 1 month",
    "1-3-months": "1–3 months",
    "more-3-months": "More than 3 months",
    "under-1000": "Under $1,000",
    "1000-3000": "$1,000 – $3,000",
    "over-3000": "Over $3,000",
    "no-time": "I don't have time",
    "join-briefly": "I can join briefly",
    "ready-commit": "I'm ready to commit and learn",
    "social-media": "Through social media",
    "direct-contacts": "Directly to friends and contacts",
    
    // Get In Touch Form
    "get-in-touch": "Get in Touch",
    "get-in-touch-description": "Have questions about our services or ready to start your trading journey? We're here to help.",
    "send-message": "Send us a Message",
    "send-message-description": "Fill out the form below and we'll get back to you as soon as possible.",
    "subject": "Subject",
    "message": "Message",
    
    // Broker Steps
    "start-easy-steps": "Start In 3 Easy Steps",
    "step-1-register": "Register On our website",
    "step-2-form": "Complete the Collaboration form",
    "step-3-connect": "Get Connected for our team to reach you out",
  },
  fa: {
    // General UI
    "read-more": "بیشتر بخوانید",
    "load-more": "بارگذاری بیشتر",
    "search-matches": "جستجوی موارد",
    "all": "همه",
    "free": "رایگان",
    "loading": "در حال بارگذاری...",
    "please-wait": "لطفاً منتظر بمانید تا محتوا بارگذاری شود",
    
    // Error messages
    "error": "خطا",
    "try-again": "تلاش دوباره",
    "go-to-home": "برو به خانه",
    "go-back": "برگشت",
    "error-details": "جزئیات خطا",
    "something-went-wrong": "مشکلی پیش آمده است!",
    "unexpected-error": "ما با خطای غیرمنتظره‌ای مواجه شدیم. لطفاً دوباره تلاش کنید.",
    "page-not-found": "404 - صفحه یافت نشد",
    "page-not-found-desc": "متأسفانه، صفحه‌ای که به دنبال آن هستید یافت نشد.",
    "component-error": "این جزء با خطا مواجه شده است. لطفاً دوباره تلاش کنید.",
    
    // Form and actions
    "search": "جستجو",
    "submit": "ارسال",
    "cancel": "لغو",
    "save": "ذخیره",
    "edit": "ویرایش",
    "delete": "حذف",
    "close": "بستن",
    
    // Navigation
    "home": "خانه",
    "back": "بازگشت",
    "next": "بعدی",
    "previous": "قبلی",
    
    // Status messages
    "success": "موفقیت",
    "warning": "هشدار",
    "info": "اطلاعات",
    "no-data": "داده‌ای موجود نیست",
    "no-results": "نتیجه‌ای یافت نشد",
    
    // Common phrases
    "click-here": "اینجا کلیک کنید",
    "learn-more": "بیشتر بدانید",
    "view-all": "مشاهده همه",
    "show-more": "نمایش بیشتر",
    "show-less": "نمایش کمتر",
    
    // Collaboration Form
    "collaboration-form": "فرم همکاری",
    "broker-registration": "ثبت نام کارگزار",
    "collaboration-description": "کمک کنید تا زمینه و علایق شما را برای همکاری احتمالی درک کنیم.",
    "broker-description": "با کارگزار شریک ما ثبت نام کنید تا به تمام خدمات ما دسترسی پیدا کنید.",
    "basic-information": "اطلاعات پایه",
    "name": "نام",
    "age": "سن",
    "phone": "تلفن",
    "email": "ایمیل",
    "city-country": "شهر و کشور محل سکونت",
    "current-occupation": "شغل فعلی",
    "financial-expectation": "انتظار مالی شما از این همکاری چیست؟",
    "social-media-accounts": "لطفاً حساب‌های فعال رسانه‌های اجتماعی خود را به اشتراک بگذارید (اینستاگرام، تلگرام، لینکدین و غیره)",
    "enter-full-name": "نام کامل خود را وارد کنید",
    "enter-age": "سن خود را وارد کنید",
    "enter-phone": "شماره تلفن خود را وارد کنید",
    "enter-email": "آدرس ایمیل خود را وارد کنید",
    "enter-city-country": "مثال: تهران، ایران",
    "enter-occupation": "شغل فعلی خود را وارد کنید",
    "describe-expectations": "لطفاً انتظارات مالی خود را شرح دهید...",
    "list-social-media": "لطفاً حساب‌های رسانه‌های اجتماعی خود را فهرست کنید...",
    "select-option": "یک گزینه انتخاب کنید",
    "submit-collaboration": "ارسال فرم همکاری",
    
    // Questions
    "q4": "۴. تا چه حد با بازارهای مالی آشنا هستید؟",
    "q5": "۵. تجربه معاملاتی شما چیست؟",
    "q6": "۶. تا چه حد مدیریت ریسک را درک می‌کنید؟",
    "q7": "۷. تا چه حد با اصطلاحات پایه معاملاتی مانند لات، پیپ، اهرم آشنا هستید؟",
    "q8": "۸. کدام برای شما جالب‌تر است؟",
    "q9": "۹. انگیزه اصلی شما برای همکاری با بلومست چیست؟",
    "q10": "۱۰. تا چه حد در بازاریابی یا معرفی تجربه دارید؟",
    "q11": "۱۱. چند ساعت در روز می‌توانید به این همکاری اختصاص دهید؟",
    "q12": "۱۲. کدام برای شما مهم‌تر است؟",
    "q13": "۱۳. چه زمانی انتظار دارید از این همکاری درآمد کسب کنید؟",
    "q14": "۱۴. درآمد ماهانه فعلی شما",
    "q17": "۱۷. اگر آموزش اولیه مورد نیاز باشد، چگونه پاسخ می‌دهید؟",
    "q18": "۱۸. چگونه ترجیح می‌دهید بلومست را معرفی کنید؟",
    
    // Options
    "no-knowledge": "بدون دانش",
    "somewhat-familiar": "تا حدودی آشنا",
    "confident-understanding": "درک مطمئن",
    "no-experience": "بدون تجربه",
    "less-than-1-year": "کمتر از ۱ سال",
    "more-than-1-year": "بیشتر از ۱ سال",
    "dont-know-risk": "نمی‌دانم آن چیست",
    "know-basics": "اصول را می‌دانم",
    "apply-practice": "می‌توانم در عمل به کار ببرم",
    "not-at-all": "اصلاً",
    "heard-some": "بعضی را شنیده‌ام",
    "fully-familiar": "کاملاً آشنا",
    "learning-trade": "یادگیری معامله",
    "referring-networking": "معرفی و شبکه‌سازی",
    "both": "هر دو",
    "side-income": "درآمد جانبی",
    "learning-experience": "یادگیری و تجربه",
    "professional-career": "ساختن حرفه‌ای",
    "none": "هیچ",
    "some": "کمی",
    "professional-experience": "تجربه حرفه‌ای",
    "less-1-hour": "کمتر از ۱ ساعت",
    "1-3-hours": "۱-۳ ساعت",
    "more-3-hours": "بیشتر از ۳ ساعت",
    "quick-income": "درآمد سریع",
    "long-term-income": "درآمد بلندمدت پایدار",
    "less-1-month": "کمتر از ۱ ماه",
    "1-3-months": "۱-۳ ماه",
    "more-3-months": "بیشتر از ۳ ماه",
    "under-1000": "زیر ۱,۰۰۰ دلار",
    "1000-3000": "۱,۰۰۰ - ۳,۰۰۰ دلار",
    "over-3000": "بالای ۳,۰۰۰ دلار",
    "no-time": "وقت ندارم",
    "join-briefly": "می‌توانم مختصر شرکت کنم",
    "ready-commit": "آماده تعهد و یادگیری هستم",
    "social-media": "از طریق رسانه‌های اجتماعی",
    "direct-contacts": "مستقیماً به دوستان و آشنایان",
    
    // Get In Touch Form
    "get-in-touch": "با ما تماس بگیرید",
    "get-in-touch-description": "سوالی درباره خدمات ما دارید یا آماده شروع سفر معاملاتی خود هستید؟ ما اینجا هستیم تا کمک کنیم.",
    "send-message": "پیام خود را برای ما ارسال کنید",
    "send-message-description": "فرم زیر را پر کنید و ما در اسرع وقت با شما تماس خواهیم گرفت.",
    "subject": "موضوع",
    "message": "پیام",
    
    // Broker Steps
    "start-easy-steps": "شروع در ۳ قدم آسان",
    "step-1-register": "در وب‌سایت ما ثبت نام کنید",
    "step-2-form": "فرم همکاری را تکمیل کنید",
    "step-3-connect": "متصل شوید تا تیم ما با شما تماس بگیرد",
  },
};

// Create a type for the valid translation keys
type TranslationKeys = keyof (typeof translations)["en"];

interface LanguageContextType {
  language: "en" | "fa";
  toggleLanguage: () => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: "en" | "fa";
}) {
  const [language, setLanguage] = useState(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fa" : "en";
    setLanguage(newLang);
    const newPath = pathname.replace(`/${language}`, `/${newLang}`);
    router.push(newPath);
  };

  const t = (key: TranslationKeys) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  const value = { language, toggleLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
