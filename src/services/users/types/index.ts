import { AppResponse } from "../../Api/types";

interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string;
  birthDate: string | null;
  avatarUrl: string | null;
  createdAt: string;
}

interface ICreateUserRequest {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  telephone?: string | null;
  birthDate: string;
}

interface ICreateUserResponse extends AppResponse {
  data?: {
    id: string;
    name: string;
    email: string;
    telephone: string | null;
    birthDate: string;
  };
}

interface IListUsersByIdRequest {
  id: string;
}

interface IListUsersByIdResponse extends AppResponse {
  data?: {
    user: IUser;
  };
}

export type {
  IUser,
  ICreateUserRequest,
  ICreateUserResponse,
  IListUsersByIdRequest,
  IListUsersByIdResponse,
};
