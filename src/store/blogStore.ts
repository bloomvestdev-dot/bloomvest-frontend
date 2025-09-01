import { create } from "zustand";
import { getBlogs, getPageBySlug } from "@/data/loader";

interface BlogState {
  blocks: any[];
  allBlogs: any[];
  categories: any[];
  searchTerm: string;
  activeCategory: string;
  isLoading: boolean;
  error: string | null;
  fetchBlogData: (locale: string) => Promise<void>;
  setSearchTerm: (term: string) => void;
  setActiveCategory: (category: string) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  blocks: [],
  allBlogs: [],
  categories: [],
  searchTerm: "",
  activeCategory: "All",
  isLoading: true,
  error: null,

  fetchBlogData: async (locale: string) => {
    set({ isLoading: true, error: null });
    try {
      const [pageData, blogData] = await Promise.all([
        getPageBySlug("blogs", locale),
        getBlogs(locale),
      ]);

      const page = pageData.data[0];
      if (!page) {
        throw new Error("Page data not found.");
      }

      const blogHeroBlock = page.blocks.find(
        (block: any) => block.__component === "blocks.blog-hero"
      );
      const categories = blogHeroBlock?.categories || [];

      set({
        blocks: page.blocks,
        allBlogs: blogData.data,
        categories,
        isLoading: false,
      });
    } catch (err: any) {
      console.error("Failed to fetch blog data:", err);
      set({ isLoading: false, error: err.message });
    }
  },

  setSearchTerm: (term: string) => set({ searchTerm: term }),
  setActiveCategory: (category: string) => set({ activeCategory: category }),
}));
