import api from "../Api/api";

import {
  ICreateUserRequest,
  ICreateUserResponse,
  IListUsersByIdRequest,
  IListUsersByIdResponse,
  IUpdateAvatarRequest,
  IUpdateAvatarResponse,
  IUpdateCoverRequest,
  IUpdateCoverResponse,
} from "./types";

const createUser = async ({
  name,
  email,
  confirmEmail,
  password,
  confirmPassword,
  telephone,
  birthDate,
}: ICreateUserRequest): Promise<ICreateUserResponse> => {
  const response = await api
    .post("/users", {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birthDate,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const listUserById = async ({
  id,
}: IListUsersByIdRequest): Promise<IListUsersByIdResponse> => {
  const response = await api
    .get(`/users/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const updateAvatar = async ({
  avatarUrl,
}: IUpdateAvatarRequest): Promise<IUpdateAvatarResponse> => {
  const response = await api.patch(`/users/updateAvatar`, { avatarUrl });

  return response.data;
};

const updateCover = async ({
  coverUrl,
}: IUpdateCoverRequest): Promise<IUpdateCoverResponse> => {
  const response = await api.patch(`/users/updateCover`, { coverUrl });

  return response.data;
};

export { createUser, listUserById, updateAvatar, updateCover };
