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
import { useDeleteProject, useGetAllProjects } from "@/hooks/project.hook";
import CommonLoader from "@/components/ui/loading/CommonLoader";
import Pagination from "@/components/ui/pagination/Pagination";
import { TDisplayProject } from "@/types";

const ManageProjectPage = () => {
  const [dataLimit, setDataLimit] = useState(8);
  const [pageCount, setPageCount] = useState(1);
  const { data: projects, isLoading: projectLoading } = useGetAllProjects({
    limit: dataLimit,
    page: pageCount,
  });
  const { mutate: handleDeleteProject } = useDeleteProject();

  // delete Project
  const handleProjectDelete = (postId: string) => {
    const isConfirm = confirm("Are you sure to delete?");
    if (isConfirm) {
      handleDeleteProject(postId);
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
                        <TableCell className="font-medium">True</TableCell>
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
