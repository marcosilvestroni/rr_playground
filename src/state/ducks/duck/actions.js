import {
  PARENT_STATE_SET,
  PARENT_STATE_RESET,
  FIRST_CHILD_STATE_SET,
  FIRST_CHILD_STATE_RESET,
  SECOND_CHILD_STATE_SET,
  SECOND_CHILD_STATE_RESET
} from "./types";

export const doParentStateSet = () => {
  return { type: PARENT_STATE_SET };
};

export const doParentStateReset = () => {
  return { type: PARENT_STATE_RESET };
};

export const doFirstChildSet = () => {
  return { type: FIRST_CHILD_STATE_SET };
};

export const doFirstChildReset = () => {
  return { type: FIRST_CHILD_STATE_RESET };
};

export const doSecondChildSet = () => {
  return { type: SECOND_CHILD_STATE_SET };
};

export const doSecondChildReset = () => {
  return { type: SECOND_CHILD_STATE_RESET };
};
