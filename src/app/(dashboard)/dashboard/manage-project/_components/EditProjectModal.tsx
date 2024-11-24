"use client";
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
import { ChangeEvent, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TDisplayProject } from "@/types";
import { useUpdateProject } from "@/hooks/project.hook";

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

const EditProjectModal = ({ project }: { project: TDisplayProject }) => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [mainFeatures, setMainFeatures] = useState("");
  const [allFeatures, setAllFeatures] = useState("");
  const { mutate: handleUpdateProject } = useUpdateProject();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (project) {
      setValue("title", project?.title);
      setValue("subtitle", project?.subtitle);
      setValue("liveLink", project?.liveLink);
      setValue("githubClient", project?.githubClient);
      setValue("githubServer", project?.githubServer);
      setValue("technologies", project?.technologies);
      setImagesPreview(project?.image || []);
      setMainFeatures(project?.mainFeatures || "");
      setAllFeatures(project?.allFeatures || "");
    }
  }, [project, setValue]);

  const handlePost: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const imageUrl = imagesPreview?.filter(
          (img) => !img.startsWith("data:")
        );
        const formData = new FormData();

        if (selectedImages.length > 0) {
          for (const projectImg of selectedImages) {
            formData.append("images", projectImg);
          }
        }
        const newProject = {
          title: data?.title,
          subtitle: data?.subtitle,
          liveLink: data?.liveLink,
          githubClient: data?.githubClient,
          githubServer: data?.githubServer,
          technologies: data?.technologies,
          mainFeatures: mainFeatures,
          allFeatures: allFeatures,
          image: imageUrl,
        };
        formData.append("data", JSON.stringify(newProject));

        handleUpdateProject({ projectId: project?._id, projectData: formData });
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong!"
        );
      }
    }
  };

  //   Handle image change
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const selectedFiles = Array.from(files);
    const previews: string[] = [];
    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          previews.push(reader.result.toString());
          if (previews.length === selectedFiles.length) {
            setImagesPreview((prev) => [...prev, ...previews]);
            setSelectedImages((prev) => [...prev, ...selectedFiles]);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Remove image (both existing and new)
  const handleRemoveImage = (index: number) => {
    if (index < project?.image.length) {
      setImagesPreview((prev) => prev.filter((_, idx) => idx !== index));
    } else {
      const newFileIndex = index - project?.image.length;
      setImagesPreview((prev) => prev.filter((_, idx) => idx !== index));
      setSelectedImages((prev) =>
        prev.filter((_, idx) => idx !== newFileIndex)
      );
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
        <form onSubmit={handleSubmit(handlePost)}>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <div className="my-4">
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Title
              </label>
              <input
                type="text"
                placeholder="Enter title"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("title")}
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Subtitle
              </label>
              <input
                type="text"
                placeholder="Enter short details"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("subtitle")}
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Live-link
              </label>
              <input
                type="text"
                placeholder="Enter project live link"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("liveLink")}
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Github-link (client)
              </label>
              <input
                type="text"
                placeholder="Enter github client-link"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("githubClient")}
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Github-link (server)
              </label>
              <input
                type="text"
                placeholder="Enter github server-link"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("githubServer")}
              />
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Used Technologies
              </label>
              <input
                type="text"
                placeholder="Enter used technologies"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("technologies")}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold mb-1 inline-block">
                  Project images
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="border border-gray-300 py-1 px-2 rounded-lg w-full text-sm h-9"
                  {...register("image")}
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
              </div>
              {imagesPreview?.length > 0 && (
                <div className="flex flex-wrap gap-2 border border-gray-400 border-dashed p-4 rounded-lg">
                  {imagesPreview?.map((img, idx) => (
                    <div key={idx} className="relative">
                      <Image
                        key={idx}
                        src={img}
                        alt="post image"
                        width={96}
                        height={96}
                        className="object-cover rounded bg-gray-100 w-24 h-24"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(idx)}
                        className="absolute top-1 right-1 text-xs p-1 bg-red-500 text-white rounded"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="border border-gray-400 border-dashed p-4 rounded-lg">
              <label className="text-sm font-semibold mb-2 inline-block">
                Featured Area
              </label>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold mb-1 inline-block">
                    Main Features
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={mainFeatures}
                    onChange={setMainFeatures}
                    modules={modules}
                    placeholder="Write main features in bullet point..."
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1 inline-block">
                    All Features
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={allFeatures}
                    onChange={setAllFeatures}
                    modules={modules}
                    placeholder="Write all features in bullet point..."
                  />
                </div>
              </div>
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

export default EditProjectModal;
