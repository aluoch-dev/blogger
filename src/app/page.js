import { Navbar } from "@/components/navbar";
import logo from './../images/logo.svg'
import { Footer } from "@/components/footer";
import { BlogItem } from "@/components/blogItem";
import blogData from "@/data/blogdata";


export default function Home() {
  return (
    <>
      <Navbar logo={logo}/>
      <div className="container mx-auto p-8">
        <h6 className="text-black font-bold text-3xl text-start mt-2">The Accessibility Blog</h6>
        <h3 className="text-black text-base text-start">The voice of the excluded</h3>

      </div>
      <div className="container mx-auto p-4 m">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogData?.map((blogDataItem, index) => (
            <BlogItem 
              key={index}
              image={blogDataItem.image}
              date={blogDataItem.date}
              readTime={blogDataItem.readTime}
              title={blogDataItem.title}
              content={blogDataItem.content}
            />
          ))}
        </div>
      </div>
      <Footer logo={logo}/>
    </>
  )
}
