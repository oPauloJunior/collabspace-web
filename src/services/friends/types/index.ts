import { AppResponse } from "../../Api/types";

interface IFriend {
  id: string;
  user1: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  user2: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  createdAt: string;
}

interface IRequest {
  id: string;
  user1: {
    id: string;
    name: string;
    avatarUrl: string | null;
  };
  createdAt: string;
}

interface IListAllFriendsByUserRequest {
  id: string;
}

interface ILitsAllFriendsUserResponse extends AppResponse {
  data: {
    friends: IFriend[];
  };
}

interface IListAllRequestsByUserRequest {
  id: string;
}

interface IListAllRequestByUserResponse extends AppResponse {
  data?: {
    requests: IRequest[];
  };
}

interface ICreateFriendRequest {
  id: string;
}

interface ICreateFriendResponse extends AppResponse {
  data?: {
    id: string;
    userId1: string;
    userId2: string;
    action1: 1 | 2;
    action2: 3 | 4 | null;
    createdAt: string;
  };
}

interface ICancelRequestRequest {
  id: string;
}

type ICancelRequestResponse = AppResponse;

interface IAcceptRequestRequest {
  id: string;
}

type IAcceptRequestResponse = AppResponse;

interface IRecuseRequestRequest {
  id: string;
}

type IRecuseRequestResponse = AppResponse;

interface IDeleteFriendRequest {
  id: string;
}

type IDeleteFriendResponse = AppResponse;

export type {
  IFriend,
  IRequest,
  ILitsAllFriendsUserResponse,
  IListAllRequestsByUserRequest,
  IListAllFriendsByUserRequest,
  IListAllRequestByUserResponse,
  ICreateFriendRequest,
  ICreateFriendResponse,
  ICancelRequestRequest,
  ICancelRequestResponse,
  IAcceptRequestRequest,
  IAcceptRequestResponse,
  IRecuseRequestRequest,
  IRecuseRequestResponse,
  IDeleteFriendRequest,
  IDeleteFriendResponse,
};
