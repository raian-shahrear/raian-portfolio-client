"use client";
import Image from "next/image";
import { useGetSingleBlog } from "@/hooks/blog.hook";
import CommonLoader from "@/components/ui/loading/CommonLoader";

export type TBlogDetailsProps = {
  params: {
    blogId: string;
  };
};

const BlogDetailsPage = ({ params }: TBlogDetailsProps) => {
  const { data: blog, isLoading: blogLoading } = useGetSingleBlog(
    params?.blogId
  );
  return (
    <div className="pt-[50px] container mx-auto px-2">
      {blogLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CommonLoader />
        </div>
      ) : (
        <>
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            {blog?.data?.title}
          </h2>

          <div className="mb-6">
            <Image
              width={300}
              height={300}
              src={blog?.data?.image}
              alt="blog"
              unoptimized
              className="w-full h-[700px] object-cover rounded-md"
            />
          </div>

          <div>
            <article className="pb-4 text-gray-300 text-sm lg:text-base editor-style">
              <span
                dangerouslySetInnerHTML={{
                  __html: blog?.data?.description,
                }}
              ></span>
            </article>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetailsPage;
