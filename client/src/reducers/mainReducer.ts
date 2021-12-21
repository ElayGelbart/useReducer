import { v4 as uuidv4 } from "uuid";

const mainReducer = (
  state: Reducer.mainReducers.state,
  action: Reducer.mainReducers.action
) => {
  const { type, payload } = action;
  if (type === "addUser") {
    console.log("iam here");

    return [...state, { ...payload, id: uuidv4() }];
  }
  if (type === "deleteUser") {
    return state.filter((userObj) => {
      return userObj.id !== payload.id;
    });
  }
  if (type === "updateUser") {
    return state.map((userObj) => {
      if (userObj.id === payload.id) {
        return payload;
      }
      return userObj;
    });
  }
  return state;
};
export default mainReducer;
