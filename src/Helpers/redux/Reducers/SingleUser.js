const initialState = { singleUser: {} };

export default function SingleUser(state = initialState, action) {
  switch (action.type) {
    case "GETSINGLEUSER":
      return { ...state, singleUser: action.payload };

    default:
      return state;
  }
}
