import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const scale = width / 375; // Base scale (375px is the width of an iPhone X)

export const normalizeFontSize = (size) => Math.round(size * scale);
