import { HeroSectionProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function HeroSection({
  heading,
  description,
  trustedByTiltle,
  cta,
  logos,
  imageOne,
  imageTwo,
  imageThree,
}: HeroSectionProps) {
  return (
    <section className="mx-auto w-full px-10 py-12 mt-5">
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex w-full flex-col justify-between gap-10 lg:w-1/2">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold md:text-6xl max-w-6xl">
              {heading}
            </h1>
            <p className="text-lg text-[#878C91] max-w-xl">{description}</p>
            {cta?.href && (
              <Link
                href={cta.href}
                className="rounded-full bg-black px-6 py-3 text-white flex items-center justify-between w-[30%]"
              >
                {cta.text}
                <FaArrowRight />
              </Link>
            )}
          </div>
          <div className="flex items-center gap-10">
            <h2 className="font-semibold text-black max-w-50">
              {trustedByTiltle}
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              {logos?.map((logo) => (
                <div key={logo.id} className="relative h-8 w-24">
                  <StrapiImage
                    src={logo.image.url}
                    alt={logo.image.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          <div className="flex gap-4">
            <div className="w-1/2 relative">
              <div className="absolute bg-black rounded-full p-10 right-5 -top-10 shadow-2xl shadow-black">
                <FaArrowTrendUp color="#5CF297" size={50} />
              </div>
              <StrapiImage
                src={imageOne?.url}
                alt={imageOne?.name || "Stock market analysis"}
                width={1000}
                height={1000}
              />
            </div>

            <div className="flex w-1/2 flex-col justify-center gap-5 rounded-2xl bg-[#F0F0F0] p-7">
              <p className="text-7xl font-bold md:text-[7rem]">230+</p>
              <p className="leading-tight text-xl text-[#5C5D5F]">
                some big companies that we work with, and trust us very much
              </p>
              <div className="relative h-[5px] w-full bg-[#D9D9D9]">
                <div className="absolute top-0 h-[5px] w-[60%] bg-gray-900"></div>
              </div>
            </div>
          </div>

          <div className="relative flex h-[200px] gap-4 rounded-3xl bg-black overflow-hidden">
            <div className="left-0">
              <StrapiImage
                src={imageTwo?.url}
                alt={imageTwo?.name}
                width={300}
                height={300}
                className=""
              />
            </div>

            <div className="absolute w-full flex h-[200px] items-basline justify-between px-8">
              <div className="flex flex-col justify-center gap-5">
                <div className="flex items-center text-white">
                  <div className="h-[1px] w-14 bg-white mr-2"></div>
                  <p>Trade the Future, today.</p>
                </div>

                <p className="text-white text-4xl max-w-xs">
                  Empower Your Financial Future
                </p>
              </div>

              <StrapiImage
                src={imageThree?.url}
                alt={imageThree?.name}
                width={200}
                height={200}
                className="mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
