interface IAdmin {
  id: string;
  name: string;
}

export interface AdminState {
  admin: IAdmin;
  loading: boolean;
  error: string | null;
  login: boolean,
  message: string,
}

export enum AdminActionTypes {
  FETCH_ADMIN = "FETCH_ADMIN",
  FETCH_ADMIN_SUCCESS = "FETCH_ADMIN_SUCCESS",
  FETCH_ADMIN_ERROR = "FETCH_ADMIN_ERROR",
  DEFAULT = "DEFAULT",
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

interface DefaultAction {
  type: AdminActionTypes.DEFAULT,
  payload: string
}

export type AdminAction =
  | FetchAdminAction
  | FetchAdminSuccessAction
  | FetchAdminErrorAction
  | DefaultAction;
