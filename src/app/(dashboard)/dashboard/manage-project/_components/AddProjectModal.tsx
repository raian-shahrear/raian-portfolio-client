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
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { toast } from "sonner";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useCreateProject } from "@/hooks/project.hook";

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

const AddProjectModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mainFeatures, setMainFeatures] = useState("");
  const [allFeatures, setAllFeatures] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const { mutate: handleCreateProject } = useCreateProject();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm();

  const handleAddProject: SubmitHandler<FieldValues> = async (data) => {
    if (isValid || !isSubmitting) {
      try {
        const formData = new FormData();

        const newProject = {
          title: data?.title,
          subtitle: data?.subtitle,
          liveLink: data?.liveLink,
          githubClient: data?.githubClient,
          githubServer: data?.githubServer,
          technologies: data?.technologies,
          mainFeatures: mainFeatures,
          allFeatures: allFeatures,
        };
        formData.append("data", JSON.stringify(newProject));
        for (const postImg of selectedImages) {
          formData.append("images", postImg);
        }

        handleCreateProject(formData);
        reset();
        setSelectedImages([]);
        setImagesPreview([]);
        setMainFeatures("");
        setAllFeatures("");
      } catch (err: any) {
        toast.error(
          err?.data?.message ? err?.data?.message : "Something went wrong!"
        );
      }
    }
  };

  // image preview
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const selectedFiles = Array.from(files);
    // Update selectedImages
    setSelectedImages(selectedFiles);
    // Generate image preview URLs
    const previews: string[] = [];
    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          previews.push(reader.result.toString());
          if (previews.length === selectedFiles.length) {
            setImagesPreview(previews);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button
          className="h-fit py-1 px-1 text-sm gap-[2px]"
          onClick={() => setModalOpen(true)}
        >
          <MdAdd /> Add Project
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[800px] max-h-[50vh] overflow-y-auto overflow-x-hidden">
        <form onSubmit={handleSubmit(handleAddProject)}>
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
          </DialogHeader>
          <div className="my-4">
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter title"
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
                Project Subtitle <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter short details"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("subtitle", { required: true })}
              />
              {errors.subtitle && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Live-link <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter project live link"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("liveLink", { required: true })}
              />
              {errors.liveLink && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Github-link (client){" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter github client-link"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("githubClient", { required: true })}
              />
              {errors.githubClient && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Project Github-link (server){" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter github server-link"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("githubServer", { required: true })}
              />
              {errors.githubServer && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="text-xs font-semibold mb-1 inline-block">
                Used Technologies <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter used technologies"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                {...register("technologies", { required: true })}
              />
              {errors.technologies && (
                <span className="text-xs text-red-600 mt-[2px] inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold mb-1 inline-block">
                  Project images<span className="text-red-600">*</span>
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="border border-gray-300 py-1 px-2 rounded-lg w-full text-sm h-9"
                  {...register("image", { required: "Image is required" })}
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
                {errors.image && (
                  <span className="text-xs text-red-600 mt-[2px] inline-block">
                    {errors.image.message as string}
                  </span>
                )}
              </div>
              {imagesPreview?.length > 0 && (
                <div className="flex flex-wrap gap-2 border border-gray-400 border-dashed p-4 rounded-lg">
                  {imagesPreview.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      alt="project image"
                      width={100}
                      height={100}
                      className="object-cover rounded bg-gray-100"
                    />
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
                    Main Features <span className="text-red-600">*</span>
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
                    All Features <span className="text-red-600">*</span>
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
            <Button
              type="submit"
              className="w-fit h-fit text-xs py-2 px-2 rounded"
              onClick={() => setModalOpen(!isValid || isSubmitting)}
            >
              Add project
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectModal;
