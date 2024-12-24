import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import body from "@/constants/Colors";
import useTitleStore from "./store/titleStore";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  const message = useTitleStore((state) => state.message);

  useEffect(() => {
    setStatusBarStyle("light");
    setTimeout(async () => {
      const token = await AsyncStorage.getItem("token");
      setIsAuthenticated(true);
      if (token) router.navigate("/explore");
      setIsTokenChecked(true);
    }, 2000);
  }, []);

  if (isTokenChecked) {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: body.dominant,
        },
        headerShadowVisible: false,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="settings/account"
        options={{
          headerTitle: "Account",
        }}
      />
      <Stack.Screen
        name="coursesOverview/overview"
        options={{
          headerTitle: "Overview",
        }}
      />
      <Stack.Screen
        name="settings/settings"
        options={{
          headerTitle: "Settings",
        }}
      />
      <Stack.Screen
        name="settings/loginSettings"
        options={{
          headerTitle: "Login Settings",
        }}
      />

      <Stack.Screen
        name="settings/changePassword"
        options={{
          headerTitle: "Change Password",
        }}
      />
      <Stack.Screen
        name="settings/editProfile"
        options={{
          headerTitle: "Edit Profile",
        }}
      />
      <Stack.Screen
        name="settings/otp/forgetPassword"
        options={{
          headerTitle: "Forgot Password",
        }}
      />
      <Stack.Screen
        name="settings/otp/verifyOtp"
        options={{
          headerTitle: "Forget Password",
        }}
      />

      <Stack.Screen
        name="settings/otp/changePassword"
        options={{
          headerTitle: "Reset Password",
        }}
      />
      <Stack.Screen
        name="coursesOverview/courseView"
        options={{
          headerTitle: message?.course?.title || "Course View",
        }}
      />
      <Stack.Screen
        name="coursesOverview/search"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: body.tertiary,
          },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="payments/payment"
        options={{
          headerTitle: "Enroll A course",
        }}
      />
      <Stack.Screen
        name="payments/paymentHistory"
        options={{
          headerTitle: "Payment History",
        }}
      />
      <Stack.Screen
        name="reports/report"
        options={{
          headerTitle: "Report a bug",
        }}
      />
      <Stack.Screen
        name="settings/help/helpCenter"
        options={{
          headerTitle: "Help Center",
        }}
      />
    </Stack>
  );
}
