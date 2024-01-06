import Image from 'next/image';

export const BlogItem = ({image, title, date, readTime, content}) => {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <Image class="w-full" src={image} alt="" />
            <div class="px-6 py-4">
                <h1><span>{date}</span> . <span>{readTime} min Read</span></h1>
            <h2 class="font-bold text-l mb-2">{title }</h2>
            <p class="text-gray-700 text-base">
                {content.substring(0, 150)}...
            </p>
            </div>
      </div>
    )
}