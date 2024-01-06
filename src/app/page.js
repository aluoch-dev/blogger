import { Navbar } from "@/pages/navbar";
import logo from './../images/logo.svg'
import { Footer } from "@/pages/footer";
import { BlogItem } from "@/pages/blogItem";
import blogData from "@/data/blogdata";


export default function Home() {
  return (
    <>
      <Navbar logo={logo}/>
      <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
