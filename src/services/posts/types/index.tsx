import { AppResponse } from "../../Api/types";

interface IUserPost {
  id: string;
  name: string;
  avatarUrl: string | null;
}

interface IPost {
  id: string;
  content: string;
  tags: string | null;
  visibility: 1 | 2 | 3;
  publishedAt: string;
  user: IUserPost;
  comments: any[];
  reactions: any[];
}

interface ICreatePostsRequest {
  content: string;
  tags?: string;
  visibility?: 1 | 2 | 3;
}

interface ICreatePostsResponse extends AppResponse {
  data?: {
    id: string;
    userId: string;
    tags: string | null;
    visibility: 1 | 2 | 3;
  };
}

interface IListAllPostsResponse extends AppResponse {
  data: {
    total: number;
    posts: IPost[];
  };
}

export type {
  ICreatePostsRequest,
  ICreatePostsResponse,
  IUserPost,
  IPost,
  IListAllPostsResponse,
};
