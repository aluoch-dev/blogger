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
          <div className="container mx-auto p-8">
            <Link href='/'><span>&larr;</span>Back to blog posts</Link>
          </div>

          <div className="container mx-auto p-8">
            <h2 className="font-bold text-xl mb-4 w-full text-center">{title}</h2>
            <h1 className="text-sm mb-4 text-center"><span>{date}</span> . <span>{readTime} min Read</span></h1>
            <Image className="w-full mb-4" src={image} alt="" />
            <p className="text-black text-base text-start">
                {content}...
            </p>
          </div>
      </div>
    );
  }
  