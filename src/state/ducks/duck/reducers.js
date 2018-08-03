import {
  PARENT_STATE_SET,
  PARENT_STATE_RESET,
  FIRST_CHILD_STATE_SET,
  FIRST_CHILD_STATE_RESET,
  SECOND_CHILD_STATE_SET,
  SECOND_CHILD_STATE_RESET
} from "./types";

const INITIAL_STATE = {
  parent: undefined,
  firstChild: undefined,
  secondChild: undefined
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PARENT_STATE_SET:
      return { ...state, parent: "Set by PARENT" };
    case PARENT_STATE_RESET:
      return { ...state, parent: undefined };
    case FIRST_CHILD_STATE_SET:
      return { ...state, firstChild: "Set by FIRST CHILD" };
    case FIRST_CHILD_STATE_RESET:
      return { ...state, firstChild: undefined };
    case SECOND_CHILD_STATE_SET:
      return { ...state, secondChild: "Set by SECOND CHILD" };
    case SECOND_CHILD_STATE_RESET:
      return { ...state, secondChild: undefined };
    default:
      return state;
  }
}
