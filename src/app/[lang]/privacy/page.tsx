import React from 'react';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import { getGlobalSettings } from '@/data/loader';

type PrivacyPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const { data } = await getGlobalSettings(lang);
  const privacyContent = data?.footer?.policy || '';

  if (!privacyContent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Not Available</h1>
          <p className="text-gray-600 mb-6">Privacy Policy content is currently unavailable.</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaArrowLeft size={16} />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-gray-600 hover:text-black transition-colors"
          >
            <FaArrowLeft size={16} />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <Markdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-4xl font-bold text-black mb-8" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-semibold text-black mt-12 mb-6" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-6" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-gray-700" {...props} />
                ),
                hr: ({ node, ...props }) => (
                  <hr className="border-gray-300 my-8" {...props} />
                ),
                em: ({ node, ...props }) => (
                  <em className="text-gray-600 italic" {...props} />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-black" {...props} />
                ),
              }}
            >
              {privacyContent}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
