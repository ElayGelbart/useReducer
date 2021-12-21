import { useContext, useRef } from "react";
import mainContext from "../contexts/main";
import UserLiItem from "./UserLiItem";
export default function UserUI() {
  const { state, dispacth } = useContext(mainContext);
  const firstNameInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  function ShowAllUsers() {
    return state.map((userObj, index) => <UserLiItem index={index} />);
  }
  function addUser() {
    if (
      !firstNameInput.current ||
      !lastNameInput.current ||
      !ageInput.current
    ) {
      return;
    }
    const UserObj = {
      fName: firstNameInput.current.value,
      lName: lastNameInput.current.value,
      age: Number(ageInput.current.value),
    };
    dispacth({
      type: "addUser",
      payload: UserObj,
    });
  }
  return (
    <div>
      <ul>{ShowAllUsers()}</ul>
      <p>
        First Name:
        <input ref={firstNameInput} />
      </p>
      <p>
        Last Name:
        <input ref={lastNameInput} />
      </p>
      <p>
        Age:
        <input ref={ageInput} type="number" />
      </p>
      <button
        onClick={() => {
          addUser();
        }}
      >
        Add User
      </button>
    </div>
  );
}
