import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  register: {
    title: string;
    point: {
      title: string;
    }[];
  };
};

export default function BrokerForm({ register }: Props) {
  const { t } = useLanguage();

  // State for all form fields
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    cityCountry: "",
    occupation: "",
    financialExpectation: "",
    socialMediaAccounts: "",
  });

  // State for all dropdown questions
  const [dropdownValues, setDropdownValues] = React.useState({
    familiarWithMarkets: t("select-option"),
    tradingExperience: t("select-option"),
    riskManagement: t("select-option"),
    tradingTerms: t("select-option"),
    interest: t("select-option"),
    motivation: t("select-option"),
    marketingExperience: t("select-option"),
    hoursPerDay: t("select-option"),
    incomeImportance: t("select-option"),
    startEarning: t("select-option"),
    currentIncome: t("select-option"),
    trainingResponse: t("select-option"),
    introduceMethod: t("select-option"),
  });

  const updateDropdown = (field: string, value: string) => {
    setDropdownValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateFormField = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
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
    options,
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
            <span
              className={`${dropdownValues[field as keyof typeof dropdownValues] === t("select-option") ? "text-gray-400" : "text-gray-900"}`}
            >
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
    <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
      <div className="bg-white rounded-2xl flex flex-col gap-6 sm:gap-8 md:gap-10 h-auto sm:h-[400px] md:h-[500px] items-center justify-center border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-10 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          {register.title}
        </h1>
        <div className="flex flex-col items-start mt-4 space-y-3 sm:space-y-4 md:space-y-5">
          {register.point.map((point, index) => (
            <div className="flex items-start gap-3" key={index}>
              <FiCheckCircle className="text-[#8376FF] mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base text-[#1E1E1EBF] max-w-lg">
                {point.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* form */}
      <div className="bg-white rounded-3xl border border-gray-200 p-8 lg:p-12 w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t("broker-registration")}
          </h1>
          <p className="text-gray-500 text-lg">
            {t("broker-description")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Basic Information */}
          <div className="mb-8">
            {/* Name and Age Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("name")}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormField("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t("enter-full-name")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("age")}
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => updateFormField("age", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t("enter-age")}
                />
              </div>
            </div>

            {/* Phone and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormField("phone", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t("enter-phone")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("email")}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormField("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t("enter-email")}
                />
              </div>
            </div>

            <div className="space-y-6">
              {/* City and Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("city-country")}
                </label>
                <input
                  type="text"
                  value={formData.cityCountry}
                  onChange={(e) =>
                    updateFormField("cityCountry", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t("enter-city-country")}
                />
              </div>

              {/* Current Occupation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("current-occupation")}
                </label>
                <input
                  type="text"
                  value={formData.occupation}
                  onChange={(e) =>
                    updateFormField("occupation", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder={t("enter-occupation")}
                />
              </div>
            </div>
          </div>

          {/* Dropdown Questions */}
          <div className="space-y-6">
            {/* Question 4 */}
            <DropdownQuestion
              question={t("q4")}
              field="familiarWithMarkets"
              options={[
                t("no-knowledge"),
                t("somewhat-familiar"),
                t("confident-understanding"),
              ]}
            />

            {/* Question 5 */}
            <DropdownQuestion
              question={t("q5")}
              field="tradingExperience"
              options={[
                t("no-experience"),
                t("less-than-1-year"),
                t("more-than-1-year"),
              ]}
            />

            {/* Question 6 */}
            <DropdownQuestion
              question={t("q6")}
              field="riskManagement"
              options={[
                t("dont-know-risk"),
                t("know-basics"),
                t("apply-practice"),
              ]}
            />

            {/* Question 7 */}
            <DropdownQuestion
              question={t("q7")}
              field="tradingTerms"
              options={[t("not-at-all"), t("heard-some"), t("fully-familiar")]}
            />

            {/* Question 8 */}
            <DropdownQuestion
              question={t("q8")}
              field="interest"
              options={[
                t("learning-trade"),
                t("referring-networking"),
                t("both"),
              ]}
            />

            {/* Question 9 */}
            <DropdownQuestion
              question={t("q9")}
              field="motivation"
              options={[
                t("side-income"),
                t("learning-experience"),
                t("professional-career"),
              ]}
            />

            {/* Question 10 */}
            <DropdownQuestion
              question={t("q10")}
              field="marketingExperience"
              options={[t("none"), t("some"), t("professional-experience")]}
            />

            {/* Question 11 */}
            <DropdownQuestion
              question={t("q11")}
              field="hoursPerDay"
              options={[t("less-1-hour"), t("1-3-hours"), t("more-3-hours")]}
            />

            {/* Question 12 */}
            <DropdownQuestion
              question={t("q12")}
              field="incomeImportance"
              options={[t("quick-income"), t("long-term-income"), t("both")]}
            />

            {/* Question 13 */}
            <DropdownQuestion
              question={t("q13")}
              field="startEarning"
              options={[
                t("less-1-month"),
                t("1-3-months"),
                t("more-3-months"),
              ]}
            />

            {/* Question 14 */}
            <DropdownQuestion
              question={t("q14")}
              field="currentIncome"
              options={[t("under-1000"), t("1000-3000"), t("over-3000")]}
            />

            {/* Financial Expectation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("financial-expectation")}
              </label>
              <textarea
                value={formData.financialExpectation}
                onChange={(e) =>
                  updateFormField("financialExpectation", e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder={t("describe-expectations")}
              />
            </div>

            {/* Social Media Accounts */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("social-media-accounts")}
              </label>
              <textarea
                value={formData.socialMediaAccounts}
                onChange={(e) =>
                  updateFormField("socialMediaAccounts", e.target.value)
                }
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder={t("list-social-media")}
              />
            </div>

            {/* Question 17 */}
            <DropdownQuestion
              question={t("q17")}
              field="trainingResponse"
              options={[
                t("no-time"),
                t("join-briefly"),
                t("ready-commit"),
              ]}
            />

            {/* Question 18 */}
            <DropdownQuestion
              question={t("q18")}
              field="introduceMethod"
              options={[
                t("social-media"),
                t("direct-contacts"),
                t("both"),
              ]}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="bg-black rounded-full text-white py-4 px-6 font-medium text-lg hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 outline-none"
            >
              {t("submit-collaboration")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
