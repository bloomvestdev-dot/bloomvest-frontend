import { Block } from "@/types";
import HeroSection from "./blocks/HeroSection";
import ServiceSection from "./blocks/ServiceSection";
import OurStorySection from "./blocks/OurStorySection";
import Webinar from "./blocks/Webinar";
import AboutHeroSection from "./blocks/about-us/AboutHeroSection";
import MissionVision from "./blocks/about-us/MissionVision";
import OurValues from "./blocks/about-us/OurValues";
import WhyChoose from "./blocks/about-us/WhyChoose";
import EducationHero from "./blocks/education/EducationHero";
import LatestCourse from "./blocks/education/LatestCourse";
import FeaturedCourses from "./blocks/education/FeaturedCourses";
import BlogHero from "./blocks/blogs/BlogHero";
import LatestArticles from "./blocks/blogs/LatestArticles";
import WebinarHero from "./blocks/webinars/WebinarHero";
import UpcomingWebinars from "./blocks/webinars/UpcomingWebinars";
import ArchivedWebinar from "./blocks/webinars/ArchivedWebinar";

function blockRenderer(
  block: Block,
  index: number,
  latestCourses: any[],
  allBlogs?: any[],
  webinars?: any[]
) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.service-section":
      return <ServiceSection {...block} key={index} />;
    case "blocks.our-story":
      return <OurStorySection {...block} key={index} />;
    case "blocks.webinar":
      return <Webinar {...block} key={index} />;
    case "blocks.about-us":
      return <AboutHeroSection {...block} key={index} />;
    case "blocks.mission-vision":
      return <MissionVision {...block} key={index} />;
    case "blocks.our-values":
      return <OurValues {...block} key={index} />;
    case "blocks.why-choose":
      return <WhyChoose {...block} key={index} />;
    case "blocks.education-hero":
      return <EducationHero {...block} key={index} />;
    case "blocks.latest-course":
      // filter
      const Courses = latestCourses.filter(
        (course) => course.courseCard.featuredCourse === false
      );
      return <LatestCourse {...block} courses={Courses} key={index} />;
    case "blocks.featured-block":
      //filter
      const featuredCourses = latestCourses.filter(
        (course) => course.courseCard.featuredCourse === true
      );
      return (
        <FeaturedCourses {...block} courses={featuredCourses} key={index} />
      );
    case "blocks.blog-hero":
      return <BlogHero {...block} key={index} />;
    case "blocks.latest-article":
      return <LatestArticles {...block} key={index} allBlogs={allBlogs} />;
    case "blocks.webinar-hero":
      return <WebinarHero {...block} key={index} />;
    case "blocks.upcoming-webinars":
      return <UpcomingWebinars {...block} key={index} webinars={webinars} />;

    case "blocks.archived-webinars":
      return <ArchivedWebinar {...block} key={index} webinars={webinars} />;
    default:
      return null;
  }
}

export function BlockRenderer({
  blocks,
  latestCourses = [],
  allBlogs,
  webinars,
}: {
  blocks: Block[];
  latestCourses?: any[];
  allBlogs?: any[];
  webinars?: any[];
}) {
  return blocks.map((block, index) =>
    blockRenderer(block, index, latestCourses, allBlogs, webinars)
  );
}
