export type TFilterProps = {
  searchTerm?: string;
  sort?: string;
  limit?: number;
  page?: number;
};

export type TLoggedInUser = {
  id: string;
  userEmail: string;
  userName: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
};

export type TDisplayProject = {
  _id: string;
  title: string;
  subtitle: string;
  mainFeatures: string;
  allFeatures: string;
  liveLink: string;
  githubClient: string;
  githubServer: string;
  technologies: string;
  image: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TDisplayBlog = {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
