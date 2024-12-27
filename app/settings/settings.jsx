import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useAuth from "@/hooks/useAuth";

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteAccount } = useAuth();
  const handleLogout = async () => {
    Alert.alert("", "Are you sure you want to log out", [
      {
        text: "Logout",
        onPress: async () => {
          await AsyncStorage.clear();
          router.dismissAll();
          router.replace("/");
        },
      },
      {
        text: "Cancel",
        onPress: () => {
          return;
        },
      },
    ]);
  };
  const handleDelete = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete this account?, Deleting this account will delete all your subscribed courses",
      [
        {
          text: "yes",
          onPress: async () => {
            const res = await deleteAccount();
            if (res) {
              Alert.alert("Delete Account", "Account deleted successfully");
              await AsyncStorage.clear();
              router.dismissAll();
              router.replace("/");
            } else {
              Alert.alert("Delete Error", "check your connection");
            }
          },
        },
        {
          text: "cancel",
          onPress: () => null,
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.profileContent}
          onPress={() => router.navigate("/settings/loginSettings")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 125,
            }}
          >
            <FontAwesome6
              name="key"
              style={{ color: body.textDark }}
              size={15}
            />
            <Text style={styles.profileContentText}> Login Settings</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            style={{ color: body.textDark }}
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.profileContent}
          onPress={() => router.navigate("/settings/about")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 65,
            }}
          >
            <FontAwesome6
              name="info"
              style={{ color: body.textDark }}
              size={20}
            />
            <Text style={styles.profileContentText}> About</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            style={{ color: body.textDark }}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileContent} onPress={handleDelete}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 132,
            }}
          >
            <MaterialIcons
              name="delete"
              style={{ color: body.textDark }}
              size={20}
            />
            <Text style={styles.profileContentText}> Delete Account</Text>
          </View>
          <Text />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.profileContent, styles.logoutBtn]}
          onPress={handleLogout}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 82,
            }}
          >
            <MaterialIcons
              name="logout"
              style={{ color: body.textDark }}
              size={21}
            />
            <Text style={styles.profileContentText}> Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: body.dominant,
    color: "white",
  },
  profileContent: {
    width: "100%",
    backgroundColor: body.tertiary,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  profileContentText: {
    fontSize: 16,
    fontWeight: "800",
    color: body.textDark,
  },
  logoutBtn: {
    position: "absolute",
    bottom: 10,
  },
});
