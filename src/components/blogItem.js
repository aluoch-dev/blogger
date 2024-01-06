import Image from 'next/image';

export const BlogItem = ({image, title, date, readTime, content}) => {

    const redirectOnClick = () => {

    };
    
    return (
        <div class="max-w-sm overflow-hidden m-4 b-gray-200" onClick={redirectOnClick}>
            <Image class="w-full" src={image} alt="" />
            <div class="px-6 py-4 bg-gray-100">
                <h1><span>{date}</span> . <span>{readTime} min Read</span></h1>
            <h2 class="font-bold text-l mb-2">{title }</h2>
            <p class="text-black text-base">
                {content.substring(0, 150)}...
            </p>
            </div>
      </div>
    )
}