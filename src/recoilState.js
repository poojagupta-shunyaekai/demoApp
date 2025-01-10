import { atom } from "recoil";

export const countState = atom({
    key: 'increment_No', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });