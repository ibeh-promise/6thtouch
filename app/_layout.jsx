import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import body from "@/constants/Colors";

export default function RootLayout() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [title, setTitle] = useState("");
  useEffect(() => {
    setStatusBarStyle("light");
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const token = await AsyncStorage.getItem("token");

        setIsAuthenticated(!!token);
        setIsTokenChecked(true);
        // Use a timeout to ensure the component has mounted
        setTimeout(async () => {
          if (token) {
            router.replace("/explore");
          } else {
            router.replace("/");
          }
          await SplashScreen.hideAsync();
        }, 0);
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };

    checkToken();
  }, []);
  if (!isTokenChecked) {
    return null;
  }

  const getLocalData = async () => {
    const data = await AsyncStorage.getItem("title");
    setTitle(data);
  };
  getLocalData();

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
          headerTitle: title ? title : "null",
          headerRight: () => (
            <TouchableOpacity>
              <FontAwesome name="list" size={20} color={body.tertiary} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="/payment"
        options={{
          headerTitle: "Enroll A course",
        }}
      />
    </Stack>
  );
}
