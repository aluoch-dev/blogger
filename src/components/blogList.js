import { BlogCard } from "./blogCard"
import { formatDate } from "@/utilities/helpers"

const BlogList = ({blogData}) => {

    return (
        <div className="container mx-auto p-4 m">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {blogData?.map((blogDataItem, index) => (
                <BlogCard 
                key={index}
                slug={blogDataItem.slug}
                image={blogDataItem.image}
                date={formatDate(blogDataItem.date)}
                readTime={blogDataItem.readTime}
                title={blogDataItem.title}
                content={blogDataItem.content}
                />
            ))}
            </div>
        </div>
    )
}

export default BlogList;