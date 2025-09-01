import { ServiceProps } from "@/types";
import React from "react";
import { FaCheckCircle, FaCrown } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export default function ServicesPage({
  title,
  description,
  card,
}: ServiceProps) {
  return (
    <div className="mx-auto w-full px-6 md:px-10 py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 max-w-5xl mx-auto leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {card?.map((service, index) => (
          <div
            key={service.id}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 group hover:-translate-y-1 hover:border-[#5CF297]/50 flex flex-col h-full min-h-[480px] relative overflow-hidden backdrop-blur-sm"
            style={{
              backgroundImage: `url('/bg-service.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Service Header */}
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#5CF297] transition-colors duration-300">
                {service.title}
              </h3>
              {service.isFree && (
                <div className="flex items-center gap-2 bg-[#5CF297] text-black px-3 py-1.5 rounded-full text-sm font-semibold">
                 
                  Free
                </div>
              )}
            </div>

            {/* Service Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Service Points */}
            <div className="space-y-3 flex-grow">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <div className="flex items-start gap-3 mb-3">
                      <FaCheckCircle
                        className="text-[#5CF297] flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span className="text-gray-200 font-medium leading-relaxed">
                        {children}
                      </span>
                    </div>
                  ),
                  ul: ({ children }) => (
                    <div className="space-y-2">{children}</div>
                  ),
                  li: ({ children }) => (
                    <div className="flex items-start gap-3 mb-2">
                      <FaCheckCircle
                        className="text-[#5CF297] flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span className="text-gray-200 font-medium leading-relaxed">
                        {children}
                      </span>
                    </div>
                  ),
                }}
              >
                {service.points}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
