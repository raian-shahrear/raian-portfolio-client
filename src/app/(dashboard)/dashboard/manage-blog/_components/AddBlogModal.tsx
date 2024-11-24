"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { useCreateBlog } from "@/hooks/blog.hook";

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

const AddBlogModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [blogDescription, setBlogDescription] = useState("");
  const { mutate: handleCreateBlog } = useCreateBlog();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm();

  const handleAddBlog: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const formData = new FormData();

        const newBlog = {
          title: data?.title,
          description: blogDescription,
        };
        formData.append("data", JSON.stringify(newBlog));
        formData.append("image", data.image[0]);

        handleCreateBlog(formData);
        reset();
        setBlogDescription("");
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong!"
        );
      }
    }
  };

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button
          className="h-fit py-1 px-1 text-sm gap-[2px]"
          onClick={() => setModalOpen(true)}
        >
          <MdAdd /> Add Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[800px] max-h-[50vh] overflow-y-auto overflow-x-hidden">
        <form onSubmit={handleSubmit(handleAddBlog)}>
          <DialogHeader>
            <DialogTitle>Add Blog</DialogTitle>
          </DialogHeader>
          <div className="my-4">
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter category"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Image <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Description <span className="text-red-600">*</span>
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
            <Button
              type="submit"
              className="w-fit h-fit text-xs py-2 px-2 rounded"
              onClick={() => setModalOpen(!isValid || isSubmitting)}
            >
              Add blog
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBlogModal;
