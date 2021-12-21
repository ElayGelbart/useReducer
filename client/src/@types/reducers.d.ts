declare namespace Reducer {
  namespace mainReducers {
    interface Context {
      state: state;
      dispatch: ({ type }: { type: string }) => void;
    }
    interface UserState {
      id?: string;
      fName: string;
      lName: string;
      age: number;
    }
    interface action {
      type: string;
      payload: UserState;
    }
    type state = UserState[];
  }
}
