import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const homePageQuery = (locale: string) =>
  qs.stringify({
    locale,
    populate: {
      blocks: {
        on: {
          "blocks.service-section": {
            populate: {
              cards: true,
              background: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.hero-section": {
            populate: {
              cta: true,
              logos: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                },
              },
              imageOne: {
                fields: ["url", "name"],
              },
              imageTwo: {
                fields: ["url", "name"],
              },
              imageThree: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.our-story": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.webinar": {
            populate: {
              card: {
                populate: {
                  avatar: {
                    fields: ["url", "name"],
                  },
                  backgroud: {
                    fields: ["url", "name"],
                  },
                },
              },
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.expert-article": {
            populate: {
              cta: true,
              card: {
                populate: {
                  cta: true,
                },
              },
            },
          },
          "blocks.testimonials": {
            populate: {
              cta: {
                populate: {
                  button: true,
                },
              },
              card: {
                populate: {
                  image: {
                    fields: ["url", "name"],
                  },
                },
              },
            },
          },
        },
      },
    },
  });

export async function getHomepageData(locale: string) {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery(locale);
  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = (locale: string) =>
  qs.stringify({
    locale,
    populate: {
      header: {
        populate: {
          logo: {
            populate: {
              image: {
                fields: ["url", "name", "formats"],
              },
            },
          },
          navigation: true,
        },
      },
      footer: {
        populate: {
          cta: {
            populate: {
              button: true,
            },
          },
          logo: {
            populate: {
              image: {
                fields: ["url", "name", "formats"],
              },
            },
          },
          quickLinks: true,
          services: true,
          contacts: true,
          background: {
            fields: ["url", "name"],
          },
        },
      },
    },
  });

export async function getGlobalSettings(locale: string) {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery(locale);
  return fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug: string, locale: string) =>
  qs.stringify({
    locale,
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          "blocks.about-us": {
            populate: {
              card: true,
            },
          },
          "blocks.our-story": {
            populate: {
              image: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.mission-vision": {
            populate: {
              missionCard: true,
              visionCard: true,
              missionBg: {
                fields: ["url", "name"],
              },
              visionBg: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.our-values": {
            populate: {
              cards: true,
              icons: {
                fields: ["url", "name"],
              },
              background: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.why-choose": {
            populate: {
              list: true,
            },
          },
          "blocks.education-hero": {
            populate: {
              stats: true,
              background: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.latest-course": {
            populate: true,
          },
          "blocks.featured-block": {
            populate: {
              background: {
                fields: ["url", "name"],
              },
            },
          },
          "blocks.blog-hero": {
            populate: {
              categories: true,
            },
          },
          "blocks.latest-article": {
            populate: true,
          },
          "blocks.webinar-hero": {
            populate: true,
          },
          "blocks.upcoming-webinars": {
            populate: true,
          },
          "blocks.archived-webinars": {
            populate: true,
          },
          "blocks.contact-hero": {
            populate: {
              register: {
                populate: {
                  point: true,
                },
              },
              bg: {
                fields: ["url", "name"],
              },
            },
          },

          "blocks.service-hero": {
            populate: {
              card: true,
            },
          },
        },
      },
    },
  });

export async function getPageBySlug(slug: string, locale: string) {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug, locale);
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getCourses(locale: string) {
  const path = "/api/courses";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    locale,
    sort: "createdAt:desc",
    populate: {
      courseCard: {
        populate: {
          cta: true,
        },
      },
    },
  });

  return await fetchAPI(url.href, { method: "GET" });
}

const allBlogsQuery = (locale: string) =>
  qs.stringify({
    locale,
    sort: ["createdAt:desc"],

    populate: {
      blog: {
        populate: {
          image: {
            fields: ["url", "name"],
          },
        },
      },
    },
  });

export async function getBlogs(locale: string) {
  const path = "/api/blogs";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = allBlogsQuery(locale);
  return await fetchAPI(url.href, { method: "GET" });
}

const allWebinarsQuery = (locale: string) =>
  qs.stringify({
    locale,
    sort: ["createdAt:desc"],
    populate: {
      webinar: {
        populate: {
          cta: {
            populate: {
              button: true,
            },
          },
          speakers: true,
        },
      },
    },
  });

export async function getWebinars(locale: string) {
  const path = "/api/webinars";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = allWebinarsQuery(locale);
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getContentBySlug(slug: string, locale: string) {
  const path = "/api/blogs";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    locale,
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blog: {
        populate: {
          image: {
            fields: ["url", "name"],
          },
        },
      },
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}
