import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as AdminActionCreater from "../store/action-creators/admin";

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AdminActionCreater, dispatch);
}