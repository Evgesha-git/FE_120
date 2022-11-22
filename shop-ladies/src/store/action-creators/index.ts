import * as adminActions from "./admin";
import * as authActions from "./authAction";

export const actions = {
    ...adminActions,
    ...authActions
}