import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const homePageQuery = qs.stringify({
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
      },
    },
  },
});

export async function getHomepageData() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "name"],
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
              fields: ["url", "name"],
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

export async function getGlobalSettings() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
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
        },
      },
    },
  });

export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}

export async function getCourses() {
  const path = "/api/courses";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
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
