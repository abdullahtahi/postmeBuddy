const initialState = { post: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLPOST":
      return { ...state, post: action.payload };

    default:
      return state;
  }
};
export default PostReducer;
