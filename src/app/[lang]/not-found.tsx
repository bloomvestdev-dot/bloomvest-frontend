'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function NotFound() {
  const { language, t } = useLanguage();

  const messages = {
    title: t("page-not-found"),
    description: t("page-not-found-desc"),
    homeButton: t("go-to-home"),
    backButton: t("go-back")
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 bg-gray-50"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-100">
            <svg
              className="h-10 w-10 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-7h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {messages.title}
        </h1>

        {/* Error Description */}
        <p className="text-gray-600 mb-8">
          {messages.description}
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href={`/${language}`}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              {messages.homeButton}
            </Button>
          </Link>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full"
          >
            {messages.backButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
