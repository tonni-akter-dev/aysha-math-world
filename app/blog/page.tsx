import React from "react";
import Banner from "../about/components/Banner";
import BlogGridSection from "./components/BlogGridSection";

const Blog = () => {
  return (
    <div>
      <Banner
        title="Blogs"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <BlogGridSection />
    </div>
  );
};

export default Blog;
