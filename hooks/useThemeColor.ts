/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import body from "@/constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof body.tertiary & keyof typeof body.dominant
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return body[theme][colorName];
  }
}
