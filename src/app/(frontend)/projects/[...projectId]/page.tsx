export type TProjectDetailsProps = {
  params: {
    projectId: string;
  };
};

const ProjectDetailsPage = ({ params }: TProjectDetailsProps) => {
  return <div className="pt-[50px] container mx-auto px-2">{params?.projectId}</div>;
};

export default ProjectDetailsPage;
