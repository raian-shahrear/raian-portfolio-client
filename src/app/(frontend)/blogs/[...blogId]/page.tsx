export type TBlogDetailsProps = {
  params: {
    blogId: string;
  };
};

const BlogDetailsPage = ({ params }: TBlogDetailsProps) => {
  return <div className="pt-[50px] container mx-auto px-2">{params?.blogId}</div>;
};

export default BlogDetailsPage;
