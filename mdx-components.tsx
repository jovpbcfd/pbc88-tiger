import type { MDXComponents } from "mdx/types";
import BlogImageMainBanner from "@/components/blog-image";
import BlogButton from "./components/blog-button";
import BlogTable from "./components/blog-table";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="scroll-mt-24 text-white font-bold text-2xl md:text-4xl"
      {...props}
    ></h1>
  ),
  h2: (props) => (
    <h2
      className="scroll-mt-24 mt-2 text-white font-bold md:mt-5 md:text-3xl"
      {...props}
    ></h2>
  ),
  h3: (props) => (
    <h3
      className="scroll-mt-24 mt-2 text-white font-bold md:mt-5 md:text-2xl"
      {...props}
    ></h3>
  ),
  p: (props) => <p className="mt-2" {...props} />,
  ol: (props) => (
    <ol className="mt-2 list-decimal pl-4 md:pl-8 space-y-2" {...props} />
  ),
  ul: (props) => (
    <ol className="mt-2 list-disc pl-4 md:pl-8 space-y-2" {...props} />
  ),
  BlogImageMainBanner: BlogImageMainBanner,
  BlogButton: BlogButton,
  BlogTable: BlogTable,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
