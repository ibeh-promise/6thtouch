import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarStyle } from "expo-status-bar";
import body from "../constants/Colors";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const router = useRouter();
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  setStatusBarStyle("light");

  useEffect(() => {
    const checkToken = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
        const token = await AsyncStorage.getItem("token");
        setIsAuthenticated(!!token);
        setIsTokenChecked(true);

        // Use a timeout to ensure the component has mounted
        setTimeout(() => {
          if (token) {
            router.replace("/explore");
          } else {
            router.replace("/");
          }
        }, 0);
      } catch (error) {
        console.error("Error checking token:", error);
      } finally {
        await SplashScreen.hideAsync(); // Hide splash screen once navigation is complete
      }
    };

    checkToken();
  }, []);

  // Don't render the app layout until token check is complete
  if (!isTokenChecked) {
    return null; // Render nothing while splash screen is up
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
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="explore"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Text
              style={{
                fontSize: 21,
                color: body.tertiary,
                fontWeight: "900",
                marginVertical: 40,
              }}
            >
              Explore Courses
            </Text>
          ),
          headerRight: () => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity>
                <FontAwesome name="search" size={20} color={body.tertiary} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="ellipsis-v"
                  size={20}
                  color={body.tertiary}
                  style={{ marginLeft: 40 }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "",
        }}
      />
      {/* Add other screens similarly */}
    </Stack>
  );
}

const styles = StyleSheet.create({});
