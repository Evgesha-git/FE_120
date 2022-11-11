interface IAdmin {
  id: string;
  name: string;
}

export interface AdminState {
  admin: IAdmin;
  loading: boolean;
  error: string | null;
}

export enum AdminActionTypes {
  FETCH_ADMIN = "FETCH_ADMIN",
  FETCH_ADMIN_SUCCESS = "FETCH_ADMIN_SUCCESS",
  FETCH_ADMIN_ERROR = "FETCH_ADMIN_ERROR",
}

interface FetchAdminAction {
  type: AdminActionTypes.FETCH_ADMIN;
}

interface FetchAdminSuccessAction {
  type: AdminActionTypes.FETCH_ADMIN_SUCCESS;
  payload: IAdmin;
}

interface FetchAdminErrorAction {
  type: AdminActionTypes.FETCH_ADMIN_ERROR;
  payload: string;
}

export type AdminAction =
  | FetchAdminAction
  | FetchAdminSuccessAction
  | FetchAdminErrorAction;
