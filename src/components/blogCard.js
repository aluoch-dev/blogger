import Image from 'next/image';
import Link from 'next/link';

export const BlogCard = ({slug, image, title, date, readTime, content}) => {

    
    return (
        <Link href={`/blog/${slug}`} className="max-w-sm overflow-hidden m-4 bg-gray-100">            <Image class="w-full" src={image} alt="" />
            <div className="px-6 py-4 bg-gray-100">
                <h1 className="text-xs"><span>{date}</span> . <span>{readTime} min Read</span></h1>
                <h2 className="font-bold text-l mb-2">{title }</h2>
                <p className="text-black text-base">
                    {content.substring(0, 150)}...
                </p>
            </div>
      </Link>
    )
}