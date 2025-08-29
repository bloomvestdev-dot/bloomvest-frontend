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
    <div className="mx-auto w-full px-10 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-black mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="text-xl text-[#878C91] max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {card?.map((service, index) => (
          <div
            key={service.id}
            className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-800 group hover:-translate-y-2 hover:border-[#5CF297] flex flex-col h-full min-h-[500px]"
          >
            {/* Service Header */}
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white group-hover:text-[#5CF297] transition-colors duration-300">
                {service.title}
              </h3>
              {service.isFree && (
                <div className="flex items-center gap-2 bg-[#5CF297] text-black px-3 py-1 rounded-full text-sm font-medium">
                  <FaCrown size={14} />
                  Free
                </div>
              )}
            </div>

            {/* Service Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Service Points */}
            <div className="space-y-3 mb-6 flex-grow">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <div className="flex items-start gap-3 mb-3">
                      <FaCheckCircle
                        className="text-[#5CF297] flex-shrink-0 mt-1"
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
                        className="text-[#5CF297] flex-shrink-0 mt-1"
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
