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

type ComponentType = "blocks.hero-section";

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

export type Block = HeroSectionProps;

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
