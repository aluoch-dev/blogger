import BlogList from "@/components/blogList";
import blogData from "@/data/blogdata";

export default function Blog() {
  return (
    <>
      <div className="container mx-auto p-8">
        <h6 className="text-black font-bold text-3xl text-center mt-2">The Accessibility Blog</h6>
        <h3 className="text-black text-base text-center">The voice of the excluded</h3>
      </div>
      
      <BlogList 
        blogData={blogData}
      />
    </>
  )
}
