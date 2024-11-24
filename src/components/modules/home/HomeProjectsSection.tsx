"use client";
import RingLoader from "@/components/ui/loading/RingLoader";
import { useGetAllProjects } from "@/hooks/project.hook";
import { TDisplayProject } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const HomeProjectsSection = () => {
  const { data: projects, isLoading: projectLoading } = useGetAllProjects({
    limit: 3,
  });
  return (
    <>
      {projectLoading ? (
        <div className="flex justify-center items-center h-[30vh]">
          <RingLoader />
        </div>
      ) : (
        <>
          {projects?.data?.length ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {projects?.data?.map((project: TDisplayProject) => (
                  <div
                    key={project?._id}
                    className="bg-gray-200 relative rounded-md shadow-xl"
                  >
                    <div>
                      <Image
                        width={300}
                        height={200}
                        src={project?.image[0]}
                        alt="project"
                        unoptimized
                        className="w-full h-[300px] object-cover object-top rounded-tl-md rounded-tr-md"
                      />
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-[auto_24px] gap-4 items-start border-b border-gray-400 pb-2 mb-2">
                        <div>
                          <p className="text-lg md:text-xl font-semibold">
                            {project?.title}
                          </p>
                          <p className="text-base">{project?.subtitle}</p>
                        </div>
                        <Link
                          href={`/projects/${project?._id}`}
                          className="text-blue-600 text-2xl"
                        >
                          <FaArrowAltCircleRight />
                        </Link>
                      </div>
                      <div className="mb-14">
                        <p className="text-base">The main features :</p>
                        <div className="editor-style text-sm">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: project?.mainFeatures,
                            }}
                          ></span>
                        </div>
                      </div>
                      <div className="flex gap-3 absolute bottom-4">
                        <Link
                          href={project?.liveLink}
                          target="_blank"
                          className="bg-blue-600 p-2 text-sm text-white rounded-md"
                        >
                          Live link
                        </Link>
                        <Link
                          href={project?.githubClient}
                          target="_blank"
                          className="bg-gray-900 p-2 text-sm text-white rounded-md"
                        >
                          Git frontend
                        </Link>
                        <Link
                          href={project?.githubServer}
                          target="_blank"
                          className="bg-gray-900 p-2 text-sm text-white rounded-md"
                        >
                          Live link
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Link href="/projects" className="bg-gray-100 p-2 rounded-md">
                  View All
                </Link>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-[30vh]">
              <p className="text-xl sm:text-2xl text-gray-500 text-center font-medium">
                No project is added
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HomeProjectsSection;
