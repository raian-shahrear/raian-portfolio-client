import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEdit } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { TDisplayBlog } from "@/types";
import { useUpdateBlog } from "@/hooks/blog.hook";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    ["link", "image", "video", "formula"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
};

const EditBlogModal = ({ blog }: { blog: TDisplayBlog }) => {
  const [blogDescription, setBlogDescription] = useState("");
  const { mutate: handleUpdateBlog } = useUpdateBlog();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (blog) {
      setValue("title", blog?.title);
      setBlogDescription(blog?.description || "");
    }
  }, [blog, setValue]);

  const handleAddBlog: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const imageUrl = blog?.image;
        const formData = new FormData();
        if (data.image[0]) {
          formData.append("image", data.image[0]);
        }

        const newBlog = {
          title: data?.title,
          description: blogDescription,
          image: imageUrl,
        };
        formData.append("data", JSON.stringify(newBlog));

        handleUpdateBlog({ blogId: blog?._id, blogData: formData });
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong!"
        );
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-fit px-2 py-1 text-xs gap-[2px]">
          <FaEdit /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[800px] max-h-[50vh] overflow-y-auto overflow-x-hidden">
        <form onSubmit={handleSubmit(handleAddBlog)}>
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
          </DialogHeader>
          <div className="my-4">
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter category"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("title")}
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Image
              </label>
              <input
                type="file"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("image")}
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Description
              </label>
              <ReactQuill
                theme="snow"
                value={blogDescription}
                onChange={setBlogDescription}
                modules={modules}
                placeholder="Write blog here..."
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="w-fit h-fit text-xs py-2 px-2 rounded"
              >
                Update
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBlogModal;
