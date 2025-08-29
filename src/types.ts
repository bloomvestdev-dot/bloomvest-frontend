export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  name: string;
}

export interface LogoProps {
  logoText: string;
  image: ImageProps;
  id: number;
}

type ComponentType =
  | "blocks.hero-section"
  | "blocks.service-section"
  | "blocks.our-story"
  | "blocks.webinar"
  | "blocks.about-us"
  | "blocks.mission-vision"
  | "blocks.our-values"
  | "blocks.why-choose"
  | "blocks.education-hero"
  | "blocks.latest-course"
  | "blocks.featured-block"
  | "blocks.blog-hero"
  | "blocks.latest-article"
  | "blocks.webinar-hero"
  | "blocks.upcoming-webinars"
  | "blocks.archived-webinars"
  | "blocks.contact-hero"
  | "blocks.expert-article"
  | "blocks.service-hero";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>,
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block =
  | HeroSectionProps
  | ServiceSectionProps
  | OurStoryProps
  | WebinarProps
  | AboutHeroSectionProps
  | MissionVisionProps
  | OurValuesProps
  | WhyChooseProps
  | EducationHeriProps
  | LatestCourseProps
  | FeaturedCourseProps
  | BlogHeroProps
  | LatestArticlesProps
  | WebinarHeroProps
  | UpcomingWebinarsProps
  | ArchivedWebinarsProps
  | ContactHeroProps
  | ExpertArticleProps
  | ServiceProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  heading: string;
  description: string;
  trustedByTiltle: string;
  imageOne: ImageProps;
  imageTwo: ImageProps;
  imageThree: ImageProps;
  cta?: LinkProps;
  logos?: LogoProps[];
}

export interface CardProps {
  id: number;
  title: string;
  description: string;
}

export interface ServiceSectionProps extends Base<"blocks.service-section"> {
  heading: string;
  description: string;
  cards: CardProps[];
  background: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
}
export interface OurStoryProps extends Base<"blocks.our-story"> {
  heading: string;
  description: string;
  image: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
}
export interface WebinarProps extends Base<"blocks.webinar"> {
  heading: string;
  description: string;
  subtitle: string;
  card: {
    id: number;
    count: string;
    avatar: {
      id: string;
      url: string;
      name: string;
    }[];
    backgroud: {
      id: number;
      url: string;
      name: string;
    };
  };
  image: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
}

export interface AboutHeroSectionProps extends Base<"blocks.about-us"> {
  title: string;
  description: string;
  card: {
    id: number;
    title: string;
    description: string;
  }[];
}
export interface MissionVisionProps extends Base<"blocks.mission-vision"> {
  missionCard: {
    id: number;
    title: string;
    description: string;
  };
  visionCard: {
    id: number;
    title: string;
    description: string;
  };
  missionBg: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
  visionBg: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
}
export interface OurValuesProps extends Base<"blocks.our-values"> {
  title: string;
  cards: {
    id: number;
    title: string;
    description: string;
  }[];
  icons: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  }[];
  background: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
}

export interface WhyChooseProps extends Base<"blocks.why-choose"> {
  title: string;
  list: {
    id: number;
    title: string;
  }[];
}

export interface EducationHeriProps extends Base<"blocks.education-hero"> {
  title: string;
  description: string;
  stats: {
    id: number;
    title: string;
    description: string;
  }[];
  background: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
}

export interface LatestCourseProps extends Base<"blocks.latest-course"> {
  title: string;
  description: string;
}

export interface FeaturedCourseProps extends Base<"blocks.featured-block"> {
  title: string;
  background: {
    id: number;
    documentId: string;
    url: string;
    name: string;
  };
}

export interface BlogHeroProps extends Base<"blocks.blog-hero"> {
  title: string;
  description: string;
  categories: {
    id: number;
    title: string;
    slug: string;
  }[];
}

export interface LatestArticlesProps extends Base<"blocks.latest-article"> {
  title: string;
  description: string;
  allBlogs?: any[];
}

export interface WebinarHeroProps extends Base<"blocks.webinar-hero"> {
  title: string;
  description: string;
}

export interface UpcomingWebinarsProps
  extends Base<"blocks.upcoming-webinars"> {
  title: string;
  description: string;
}

export interface ArchivedWebinarsProps
  extends Base<"blocks.archived-webinars"> {
  title: string;
  description: string;
  webinars?: any[];
}

export interface ContactHeroProps extends Base<"blocks.contact-hero"> {
  title: string;
  description: string;
}

export interface ExpertArticleProps extends Base<"blocks.expert-article"> {
  title: string;
  description: string;
  cta?: LinkProps;
  card: {
    id: number;
    title: string;
    description: string;
    length: string;
    color?: string;
    cta?: LinkProps;
  }[];
}

export interface ServiceProps extends Base<"blocks.service-hero"> {
  title: string;
  description: string;
  card: {
    id: number;
    title: string;
    description: string;
    isFree: boolean;
    points: string;
  }[];
}
