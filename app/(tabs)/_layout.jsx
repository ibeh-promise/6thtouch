import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { Tabs, useRouter, useSegments } from "expo-router";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import useClicksStore from "../store/clicksStore";
import body from "@/constants/Colors";
export default function TabLayout() {
  const router = useRouter();
  const segments = useSegments();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);

  const [activeTab, setActiveTab] = useState("explore");

  const currentRoute = segments[segments.length - 1];
  const setMessage = useClicksStore((state) => state.setMessage);

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: body.dominant,
          height: 100,
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: styles.tabBarCta,
        tabBarLabelStyle: {
          fontWeight: "800",
          textTransform: "capitalize",
          color: "white",
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: "Explore Courses",

          headerTitleStyle: { fontSize: 21, fontWeight: 900 },
          headerRight: () => (
            <View style={{ width: 200, alignItems: "flex-end" }}>
              <View
                style={{
                  width: 150,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  onPress={() => router.navigate("/coursesOverview/search")}
                >
                  <FontAwesome name="search" size={20} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.navigate("/settings/account")}
                >
                  <FontAwesome5 name="user" size={20} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => setIsMenuOpen(true)}
                >
                  <FontAwesome name="ellipsis-v" size={20} color={"white"} />
                </TouchableOpacity>
              </View>
              {isMenuOpen && (
                <Modal transparent={true}>
                  <TouchableOpacity
                    style={styles.modalContainer}
                    onPress={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalContentBtn}
                        onPress={() => {
                          setIsMenuOpen(false);
                          router.navigate("/settings/settings");
                        }}
                      >
                        <Text style={{ color: body.textDark }}>Settings</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </Modal>
              )}
            </View>
          ),
          tabBarIcon: () => (
            <View
              style={[styles.nav, currentRoute == "explore" && styles.active]}
            >
              <FontAwesome
                name="wpexplorer"
                size={25}
                color={currentRoute == "explore" ? body.dominant : "white"}
              />
            </View>
          ),
          listeners: {
            tabPress: () => setActiveTab("explore"),
          },
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          headerTitle: "My Courses",

          headerTitleStyle: { fontSize: 21, fontWeight: 900 },
          headerRight: () => (
            <View style={{ width: 200, alignItems: "flex-end" }}>
              <View
                style={{
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => router.navigate("/coursesOverview/search")}
                >
                  <FontAwesome name="search" size={20} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.navigate("/settings/account")}
                >
                  <FontAwesome5 name="user" size={20} color={"white"} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ padding: 5 }}
                  onPress={() => setIsMenuOpen2(true)}
                >
                  <FontAwesome name="ellipsis-v" size={20} color={"white"} />
                </TouchableOpacity>
              </View>
              {isMenuOpen2 && (
                <Modal transparent={true}>
                  <TouchableOpacity
                    style={styles.modalContainer}
                    onPress={() => {
                      setIsMenuOpen2(false);
                    }}
                  >
                    <View style={styles.modalContent}>
                      <TouchableOpacity
                        style={styles.modalContentBtn}
                        onPress={() => {
                          setIsMenuOpen2(false);
                          router.navigate("/settings/settings");
                        }}
                      >
                        <Text style={{ color: body.textDark }}>Settings</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </Modal>
              )}
            </View>
          ),
          tabBarIcon: () => (
            <View
              style={[styles.nav, currentRoute == "courses" && styles.active]}
            >
              <FontAwesome
                name="home"
                size={25}
                color={currentRoute == "courses" ? body.dominant : "white"}
              />
            </View>
          ),
          listeners: {
            tabPress: () => setActiveTab("courses"),
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#fff",
    width: "120%",
    position: "absolute",
    top: 30,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: body.dominant,
  },
  closeMenu: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginRight: 10,
  },
  nav: {
    width: 80,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 10,
  },
  tabBarCta: {
    backgroundColor: body.dominant,
    paddingTop: 20,
    height: 90,
  },
  active: {
    backgroundColor: body.tertiary,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  modalContent: {
    width: 220,
    backgroundColor: body.tertiary,
    marginTop: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  modalContentBtn: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
  },
});
