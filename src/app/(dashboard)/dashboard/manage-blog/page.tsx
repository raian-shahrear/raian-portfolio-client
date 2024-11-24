"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddBlogModal from "./_components/AddBlogModal";
import EditBlogModal from "./_components/EditBlogModal";
import { useState } from "react";
import { useDeleteBlog, useGetAllBlogs } from "@/hooks/blog.hook";
import CommonLoader from "@/components/ui/loading/CommonLoader";
import Pagination from "@/components/ui/pagination/Pagination";
import { TDisplayBlog } from "@/types";
import Image from "next/image";

const ManageBlogPage = () => {
  const [dataLimit, setDataLimit] = useState(8);
  const [pageCount, setPageCount] = useState(1);
  const { data: blogs, isLoading: blogLoading } = useGetAllBlogs({
    limit: dataLimit,
    page: pageCount,
  });
  const { mutate: handleDeleteBlog } = useDeleteBlog();

  // delete blog
  const handleBlogDelete = (postId: string) => {
    const isConfirm = confirm("Are you sure to delete?");
    if (isConfirm) {
      handleDeleteBlog(postId);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-6">
        <h1 className="text-xl font-bold">Manage Blog</h1>
        <AddBlogModal />
      </div>

      {blogLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CommonLoader />
        </div>
      ) : (
        <>
          {blogs?.data?.length ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">SL</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>details</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs?.data?.map((blog: TDisplayBlog, idx: number) => (
                    <TableRow key={blog?._id}>
                      <TableCell className="font-medium">
                        {(pageCount - 1) * dataLimit + idx + 1}
                      </TableCell>
                      <TableCell className="font-medium w-[110px]">
                        <Image
                          width={80}
                          height={60}
                          src={blog?.image}
                          alt="blog"
                          className="w-[80px] h-[60px] object-cover rounded-sm border"
                        />
                      </TableCell>
                      <TableCell className="font-medium w-52">
                        {blog?.title}
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="editor-style">
                          <span
                            dangerouslySetInnerHTML={{
                              __html:
                                blog?.description.length > 100
                                  ? blog.description.slice(0, 99) + "..."
                                  : blog.description,
                            }}
                          ></span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <EditBlogModal blog={blog} />
                          <Button
                            onClick={() => handleBlogDelete(blog?._id)}
                            className="h-fit px-2 py-1 bg-red-600 text-xs gap-[2px]"
                          >
                            <RiDeleteBin6Line /> Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-10">
                <Pagination
                  data={blogs}
                  dataLimit={dataLimit}
                  setDataLimit={setDataLimit}
                  pageCount={pageCount}
                  setPageCount={setPageCount}
                />
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-[30vh]">
              <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                No blog data found
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManageBlogPage;
