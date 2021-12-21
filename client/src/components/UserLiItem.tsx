import { stat } from "fs";
import { useContext } from "react";
import mainContext from "../contexts/main";

export default function UserLiItem({ index }: { index: number }) {
  const { state, dispacth } = useContext(mainContext);
  function deleteUser() {
    dispacth({
      type: "deleteUser",
      payload: {
        fName: state[index].fName,
        lName: state[index].lName,
        age: state[index].age,
        id: state[index].id,
      },
    });
  }
  return (
    <li>
      First:{state[index].fName} Last:{state[index].lName} Age:
      {state[index].age}
      <button
        onClick={() => {
          deleteUser();
        }}
      >
        delete
      </button>
    </li>
  );
}
