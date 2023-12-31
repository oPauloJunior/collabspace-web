import api from "../Api/api";
import {
  ICreatePostsRequest,
  ICreatePostsResponse,
  IDeletePostRequest,
  IDeletePostResponse,
  IListAllPostsResponse,
} from "./types";

const createPost = async ({
  content,
  tags,
  visibility,
}: ICreatePostsRequest): Promise<ICreatePostsResponse> => {
  const response = await api
    .post("/posts", {
      content,
      tags,
      visibility,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const deletePost = async ({
  id,
}: IDeletePostRequest): Promise<IDeletePostResponse> => {
  const response = await api
    .delete(`/posts/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const listAllPosts = async (
  page = 0,
  limit = 10,
): Promise<IListAllPostsResponse> => {
  const response = await api
    .get(`/posts?page=${page}&limit=${limit}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { createPost, listAllPosts, deletePost };
