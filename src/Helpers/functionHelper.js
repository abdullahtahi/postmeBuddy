import { toast } from "react-toastify";
export const showingError = (error) => {
  toast.error(error?.response?.data?.message || error?.message || error);
};
export const sendDataToRedux = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
