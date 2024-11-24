"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useGetAllBlogs } from "@/hooks/blog.hook";
import RingLoader from "@/components/ui/loading/RingLoader";
import { TDisplayBlog } from "@/types";

const HomeBlogsSection = () => {
  const { data: blogs, isLoading: blogLoading } = useGetAllBlogs({
    limit: 4,
  });
  return (
    <>
      {blogLoading ? (
        <div className="flex justify-center items-center h-[30vh]">
          <RingLoader />
        </div>
      ) : (
        <>
          {blogs?.data?.length ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {blogs?.data?.map((blog: TDisplayBlog) => (
                  <div
                    key={blog?._id}
                    className="bg-gray-900 rounded-md shadow-xl"
                  >
                    <div>
                      <Image
                        width={300}
                        height={300}
                        src={blog?.image}
                        alt="blog"
                        unoptimized
                        className="w-full h-[400px] object-cover rounded-tl-md rounded-tr-md"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300 text-lg md:text-xl mb-2">
                        {blog?.title}
                      </p>
                      <article className="mb-4 text-gray-300 text-sm editor-style">
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              blog?.description.length > 200
                                ? blog.description.slice(0, 199) + "..."
                                : blog.description,
                          }}
                        ></span>
                      </article>
                      <Link
                        href={`/blogs/${blog?._id}`}
                        className="text-sm text-blue-400 flex items-center gap-1 transition-all duration-300 hover:gap-2"
                      >
                        See Details <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Link href="/blogs" className="bg-gray-100 p-2 rounded-md">
                  Explore all
                </Link>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-[30vh]">
              <p className="text-xl sm:text-2xl text-gray-500 text-center font-medium">
                No blog is added
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomeBlogsSection;
