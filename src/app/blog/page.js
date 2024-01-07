import { BlogCard } from "@/components/blogCard";
import { SearchInput } from "@/components/inputs";
import blogData from "@/data/blogdata";

export default function Blog() {
  return (
    <>
      <div className="container mx-auto p-8">
        <h6 className="text-black font-bold text-3xl text-center mt-2">The Accessibility Blog</h6>
        <h3 className="text-black text-base text-center">The voice of the excluded</h3>
      </div>
      <div className="container mx-auto p-4 m">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogData?.map((blogDataItem, index) => (
            <BlogCard 
              key={index}
              slug={blogDataItem.slug}
              image={blogDataItem.image}
              date={blogDataItem.date}
              readTime={blogDataItem.readTime}
              title={blogDataItem.title}
              content={blogDataItem.content}
            />
          ))}
        </div>
      </div>
    </>
  )
}
