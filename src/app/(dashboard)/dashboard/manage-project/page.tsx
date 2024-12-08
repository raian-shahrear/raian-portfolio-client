"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProjectModal from "./_components/AddProjectModal";
import EditProjectModal from "./_components/EditProjectModal";
import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import {
  useDeleteProject,
  useGetAllProjects,
  useUpdateProject,
} from "@/hooks/project.hook";
import CommonLoader from "@/components/ui/loading/CommonLoader";
import Pagination from "@/components/ui/pagination/Pagination";
import { TDisplayProject } from "@/types";
import { toast } from "sonner";

const ManageProjectPage = () => {
  const [featuredSerialNo, setFeaturedSerialNo] = useState("");
  const [featureChecked, setFeatureChecked] = useState(false);
  const [dataLimit, setDataLimit] = useState(8);
  const [pageCount, setPageCount] = useState(1);
  const { data: projects, isLoading: projectLoading } = useGetAllProjects({
    limit: dataLimit,
    page: pageCount,
  });
  const { mutate: handleDeleteProject } = useDeleteProject();
  const { mutate: handleUpdateProject } = useUpdateProject();

  // delete Project
  const handleProjectDelete = (postId: string) => {
    const isConfirm = confirm("Are you sure to delete?");
    if (isConfirm) {
      handleDeleteProject(postId);
    }
  };

  // update featured product
  const handleFeaturedItem = async (data: TDisplayProject) => {
    const formData = new FormData();

    try {
      const updateFeatured = {
        isFeatured: featureChecked,
        featuredSerial: Number(featuredSerialNo),
        image: data?.image,
      };
      formData.append("data", JSON.stringify(updateFeatured));
      handleUpdateProject({ projectId: data?._id, projectData: formData });
    } catch (err: any) {
      toast.error(
        err?.data?.message ? err?.data?.message : "Something went wrong!"
      );
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-2 mb-6">
        <h1 className="text-xl font-bold">Manage Project</h1>
        <AddProjectModal />
      </div>

      {projectLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CommonLoader />
        </div>
      ) : (
        <>
          {projects?.data?.length ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">SL</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Subtitle</TableHead>
                    <TableHead>Links</TableHead>
                    <TableHead>isFeatured</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects?.data?.map(
                    (project: TDisplayProject, idx: number) => (
                      <TableRow key={project?._id}>
                        <TableCell className="font-medium">
                          {(pageCount - 1) * dataLimit + idx + 1}
                        </TableCell>
                        <TableCell className="font-medium">
                          {project?.title}
                        </TableCell>
                        <TableCell className="font-medium">
                          {project?.subtitle}
                        </TableCell>
                        <TableCell className="font-medium">
                          <div>
                            <p>Live: {project?.liveLink}</p>
                            <p>Github (client): {project?.githubClient}</p>
                            <p>Github (server): {project?.githubServer}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-3 items-center">
                            <div className="flex flex-col gap-1">
                              <div>
                                <label
                                  htmlFor={`featured_item_${idx}`}
                                  className="inline-flex items-center space-x-4 cursor-pointer"
                                >
                                  <span className="relative">
                                    <input
                                      id={`featured_item_${idx}`}
                                      type="checkbox"
                                      className="hidden peer"
                                      defaultChecked={project?.isFeatured}
                                      onChange={(e) =>
                                        setFeatureChecked(e.target.checked)
                                      }
                                    />
                                    <div className="w-10 h-5 rounded-full shadow-inner bg-gray-300 peer-checked:bg-gray-900"></div>
                                    <div className="absolute inset-y-0 left-0 w-3 h-3 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                  </span>
                                </label>
                              </div>
                              <div>
                                <input
                                  onChange={(e) =>
                                    setFeaturedSerialNo(e.target.value)
                                  }
                                  defaultValue={project?.featuredSerial}
                                  type="number"
                                  name="featuredSl"
                                  placeholder="Serial no."
                                  max={3}
                                  min={0}
                                  className="p-1 text-xs rounded-md border max-w-10"
                                />
                              </div>
                            </div>
                            <span className="w-[1px] h-10 bg-gray-400"></span>
                            <Button
                              onClick={() => handleFeaturedItem(project)}
                              className="h-fit px-2 py-1 bg-gray-600 text-xs gap-[2px]"
                            >
                              update
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <EditProjectModal project={project} />
                            <Button
                              onClick={() => handleProjectDelete(project?._id)}
                              className="h-fit px-2 py-1 bg-red-600 text-xs gap-[2px]"
                            >
                              <RiDeleteBin6Line /> Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
              <div className="mt-10">
                <Pagination
                  data={projects}
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
                No project data found
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManageProjectPage;
