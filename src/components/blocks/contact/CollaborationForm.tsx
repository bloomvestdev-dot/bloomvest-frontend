"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CollaborationForm() {
  const { t } = useLanguage();

  // State for all form fields
  const [formData, setFormData] = React.useState({
    age: "",
    cityCountry: "",
    occupation: "",
    financialExpectation: "",
    socialMediaAccounts: "",
  });

  // State for all dropdown questions
  const [dropdownValues, setDropdownValues] = React.useState({
    familiarWithMarkets: "Select an option",
    tradingExperience: "Select an option", 
    riskManagement: "Select an option",
    tradingTerms: "Select an option",
    interest: "Select an option",
    motivation: "Select an option",
    marketingExperience: "Select an option",
    hoursPerDay: "Select an option",
    incomeImportance: "Select an option",
    startEarning: "Select an option",
    currentIncome: "Select an option",
    trainingResponse: "Select an option",
    introduceMethod: "Select an option",
  });

  const updateDropdown = (field: string, value: string) => {
    setDropdownValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateFormField = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Dropdown Values:", dropdownValues);
    // Handle form submission here
  };

  const DropdownQuestion = ({ 
    question, 
    field, 
    options 
  }: { 
    question: string; 
    field: string; 
    options: string[];
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {question}
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-full px-4 py-3 border border-gray-300 rounded-lg flex justify-between items-center bg-white hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors">
            <span className={`${dropdownValues[field as keyof typeof dropdownValues] === "Select an option" ? "text-gray-400" : "text-gray-900"}`}>
              {dropdownValues[field as keyof typeof dropdownValues]}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
          <DropdownMenuRadioGroup
            value={dropdownValues[field as keyof typeof dropdownValues]}
            onValueChange={(value) => updateDropdown(field, value)}
          >
            {options.map((option, index) => (
              <DropdownMenuRadioItem key={index} value={option}>
                {option}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-12 w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Collaboration Form
          </h1>
          <p className="text-gray-500 text-lg">
            Help us understand your background and interests for potential collaboration.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Basic Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Section 1: Basic Information</h2>
            
            <div className="space-y-6">
              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your age
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => updateFormField("age", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter your age"
                />
              </div>

              {/* City and Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City and country of residence
                </label>
                <input
                  type="text"
                  value={formData.cityCountry}
                  onChange={(e) => updateFormField("cityCountry", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="e.g., New York, USA"
                />
              </div>

              {/* Current Occupation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current occupation
                </label>
                <input
                  type="text"
                  value={formData.occupation}
                  onChange={(e) => updateFormField("occupation", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Enter your current occupation"
                />
              </div>
            </div>
          </div>

          {/* Dropdown Questions */}
          <div className="space-y-6">
            {/* Question 4 */}
            <DropdownQuestion
              question="4. How familiar are you with financial markets?"
              field="familiarWithMarkets"
              options={["No knowledge", "Somewhat familiar", "Confident understanding"]}
            />

            {/* Question 5 */}
            <DropdownQuestion
              question="5. What is your trading experience?"
              field="tradingExperience"
              options={["No experience", "Less than 1 year", "More than 1 year"]}
            />

            {/* Question 6 */}
            <DropdownQuestion
              question="6. How well do you understand risk management?"
              field="riskManagement"
              options={["I don't know what it is", "I know the basics", "I can apply it in practice"]}
            />

            {/* Question 7 */}
            <DropdownQuestion
              question="7. How familiar are you with basic trading terms such as lot, pip, leverage?"
              field="tradingTerms"
              options={["Not at all", "I've heard some", "Fully familiar"]}
            />

            {/* Question 8 */}
            <DropdownQuestion
              question="8. Which interests you more?"
              field="interest"
              options={["Learning to trade", "Referring and networking", "Both"]}
            />

            {/* Question 9 */}
            <DropdownQuestion
              question="9. What is your main motivation for collaborating with Bloomvest?"
              field="motivation"
              options={["Side income", "Learning and experience", "Building a professional career"]}
            />

            {/* Question 10 */}
            <DropdownQuestion
              question="10. How much experience do you have in marketing or referrals?"
              field="marketingExperience"
              options={["None", "Some", "Professional experience"]}
            />

            {/* Question 11 */}
            <DropdownQuestion
              question="11. How many hours per day can you dedicate to this collaboration?"
              field="hoursPerDay"
              options={["Less than 1 hour", "1–3 hours", "More than 3 hours"]}
            />

            {/* Question 12 */}
            <DropdownQuestion
              question="12. Which is more important for you?"
              field="incomeImportance"
              options={["Quick income", "Long-term stable income", "Both"]}
            />

            {/* Question 13 */}
            <DropdownQuestion
              question="13. When do you expect to start earning from this collaboration?"
              field="startEarning"
              options={["Less than 1 month", "1–3 months", "More than 3 months"]}
            />

            {/* Question 14 */}
            <DropdownQuestion
              question="14. Your current monthly income"
              field="currentIncome"
              options={["Under $1,000", "$1,000 – $3,000", "Over $3,000"]}
            />

            {/* Financial Expectation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What is your financial expectation from this collaboration?
              </label>
              <textarea
                value={formData.financialExpectation}
                onChange={(e) => updateFormField("financialExpectation", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Please describe your financial expectations..."
              />
            </div>

            {/* Social Media Accounts */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please share your active social media accounts (Instagram, Telegram, LinkedIn, etc.)
              </label>
              <textarea
                value={formData.socialMediaAccounts}
                onChange={(e) => updateFormField("socialMediaAccounts", e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Please list your social media accounts..."
              />
            </div>

            {/* Question 17 */}
            <DropdownQuestion
              question="17. If initial training is required, how would you respond?"
              field="trainingResponse"
              options={["I don't have time", "I can join briefly", "I'm ready to commit and learn"]}
            />

            {/* Question 18 */}
            <DropdownQuestion
              question="18. How would you prefer to introduce Bloomvest?"
              field="introduceMethod"
              options={["Through social media", "Directly to friends and contacts", "Both"]}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-none"
            >
              {t("submit") || "Submit Collaboration Form"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
