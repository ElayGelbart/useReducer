import { useReducer } from "react";
import UserUI from "./UserUI";
import mainContext from "../contexts/main";
import mainReducer from "../reducers/mainReducer";
import { v4 as uuidv4 } from "uuid";
const initState: Reducer.mainReducers.state = [
  { id: uuidv4(), fName: "Elay", lName: "gelbart", age: 23 },
  { id: uuidv4(), fName: "Shaked", lName: "Erinberd", age: 23 },
];
export default function App() {
  const [state, dispacth] = useReducer(mainReducer, initState);
  return (
    <mainContext.Provider value={{ state, dispacth }}>
      <UserUI />
    </mainContext.Provider>
  );
}
