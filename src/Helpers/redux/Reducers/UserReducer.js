const initialState = { User: [] };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETALLUser":
      return { ...state, User: action.payload };

    default:
      return state;
  }
};
export default UserReducer;
