"use client";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useGetSingleProject } from "@/hooks/project.hook";
import CommonLoader from "@/components/ui/loading/CommonLoader";

export type TProjectDetailsProps = {
  params: {
    projectId: string;
  };
};

const ProjectDetailsPage = ({ params }: TProjectDetailsProps) => {
  const { data: project, isLoading: projectLoading } = useGetSingleProject(
    params?.projectId
  );

  return (
    <>
      {projectLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CommonLoader />
        </div>
      ) : (
        <div className="pt-[50px] container mx-auto px-2">
          <h2 className="text-xl lg:text-3xl text-white border-b border-gray-500 pb-2 mb-6">
            {project?.data?.title}: {project?.data?.subtitle}
          </h2>
          <div className="mb-10">
            <Carousel>
              <CarouselContent>
                {project?.data?.image?.map((image: string, idx: number) => (
                  <CarouselItem key={idx}>
                    <Image
                      width={300}
                      height={300}
                      src={image}
                      alt="project"
                      unoptimized
                      className="w-full rounded-md h-[350px] md:h-[450px] lg:h-[720px]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-gray-400 border-gray-400" />
              <CarouselNext className="right-4 bg-gray-400 border-gray-400" />
            </Carousel>
          </div>
          <div>
            <div className="flex gap-3">
              <Link
                href={project?.data?.liveLink}
                target="_blank"
                className="bg-blue-600 p-2 text-sm text-white rounded-md"
              >
                Live link
              </Link>
              <Link
                href={project?.data?.githubClient}
                target="_blank"
                className="bg-gray-500 p-2 text-sm text-white rounded-md"
              >
                Git frontend
              </Link>
              <Link
                href={project?.data?.githubServer}
                target="_blank"
                className="bg-gray-500 p-2 text-sm text-white rounded-md"
              >
                Live link
              </Link>
            </div>

            <div className="mt-6">
              <p className="text-xl lg:text-2xl text-gray-100 mb-2">
                All main features :
              </p>
              <div className="editor-style text-sm lg:text-base text-gray-100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: project?.data?.allFeatures,
                  }}
                ></span>
              </div>
            </div>

            <div className="mt-6 pb-6">
              <p className="text-xl lg:text-2xl text-gray-100 mb-2">
                Technologies :
              </p>
              <div className="text-sm lg:text-base text-gray-100">
                {project?.data?.technologies}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetailsPage;
