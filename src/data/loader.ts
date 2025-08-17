import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
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
  },
});

export async function getGlobalSettings() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
