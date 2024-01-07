import blogData from "@/data/blogdata"
import Link from "next/link";
import Image from "next/image";


function fetchBlogData(params) {

  const blogDataInfo = blogData.find(
    (blogData) => blogData.slug === params.slug
  );

  return blogDataInfo;

}

export default async function BlogItem({ params }) {
  
  const blogDataInfo = fetchBlogData(params);
  const { title, date, readTime, content, image } = blogDataInfo;

    return (
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-white">
          <div className="flex items-start">
            <Link href='/blog'><span>&larr;</span>Back to blog posts</Link>
          </div>
          <div className="flex items-center">
          <div className="text-sm">
              <h2 class="font-bold text-l mb-2">{title}</h2>
              <h1><span>{date}</span> . <span>{readTime} min Read</span></h1>
          </div>
          <Image className="" src={image} alt="" />
          <p className="text-black text-base">
                {content}...
            </p>
          </div>

        </div>
      </div>
    );
  }
  