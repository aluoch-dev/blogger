import { BlogCard } from "@/components/blogCard";
import BlogList from "@/components/blogList";
import blogData from "@/data/blogdata";

export default function Home() {

  return (
    <>
      <div className="container mx-auto p-8">
        <h6 className="text-black font-bold text-3xl text-start mt-2">The Accessibility Blog</h6>
        <h3 className="text-black text-base text-start">The voice of the excluded</h3>
      </div>

      <BlogList 
        blogData={blogData}/>
      
    </>
  )
}
