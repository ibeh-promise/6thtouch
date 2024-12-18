import {
  Alert,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import body from "@/constants/Colors";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import useAuth from "@/hooks/useAuth";
import * as ImageManipulator from "expo-image-manipulator";

export default function Page() {
  const { account, changeAvatar } = useAuth();
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await account(setLoading);
        setUserFirstName(data.firstName);
        setUserLastName(data.lastName);
        setUserEmail(data.email);
        setUserAvatar(data.avatar);

        await AsyncStorage.setItem("userData", JSON.stringify(data));
      } catch (err) {
        console.error("Fetching online data failed:", err);
        try {
          const storedData = await AsyncStorage.getItem("userData");
          const parsedData = storedData ? JSON.parse(storedData) : null;
          if (parsedData) {
            setUserFirstName(parsedData.firstName);
            setUserLastName(parsedData.lastName);
            setUserEmail(parsedData.email);
            setUserAvatar(parsedData.avatar);
          }
        } catch (parseError) {
          console.error("Error retrieving cached data:", parseError);
        }
      }
    };

    fetchData();
  }, []);

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

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permissions to upload images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1, // Original quality
    });

    if (!result.cancelled) {
      try {
        // Compress image
        const compressedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: 800 } }], // Resize to a width of 800px (maintains aspect ratio)
          { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG } // Compress and save as JPEG
        );

        console.log("Compressed Image URI:", compressedImage.uri);

        // Send the compressed image to the server
        setFile(compressedImage.uri);
        const response = await changeAvatar(compressedImage.uri, setLoading);

        if (response.success) {
          setUserAvatar(response.avatarUrl); // Update avatar in UI
          Alert.alert("Success", "Avatar updated successfully.");
        }
      } catch (err) {
        console.error("Error uploading avatar:", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.topContainer}>
        {loading ? (
          <ActivityIndicator
            size={50}
            color={"white"}
            style={{ marginTop: 50 }}
          />
        ) : (
          <View style={styles.mainContainer}>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              {userAvatar == null ? (
                <View style={styles.userIconCta}>
                  <FontAwesome name="user-circle" size={150} color={"grey"} />
                </View>
              ) : (
                <Image
                  source={{ uri: userAvatar }}
                  style={styles.userIconCta}
                />
              )}
              <TouchableOpacity style={styles.editCta} onPress={pickImage}>
                <MaterialCommunityIcons
                  name="camera"
                  size={30}
                  color={"white"}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.userName}>
              {userLastName} {userFirstName}
            </Text>
            <Text style={styles.userEmail}>{userEmail}</Text>
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => router.navigate("settings/editProfile")}
            >
              <Text style={styles.editBtnText}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={{ width: "90%" }}>
              <TouchableOpacity
                style={styles.profileContent}
                onPress={() => router.navigate("/payments/paymentHistory")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: 147,
                  }}
                >
                  <FontAwesome6
                    name="money-bill-1-wave"
                    style={{ color: body.textDark }}
                    size={15}
                  />
                  <Text style={styles.profileContentText}>
                    {" "}
                    Payment History
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={{ color: body.textDark }}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileContent}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: 135,
                  }}
                >
                  <FontAwesome6
                    name="question"
                    style={{ color: body.textDark }}
                    size={20}
                  />
                  <Text style={styles.profileContentText}> Help & Support</Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={{ color: body.textDark }}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileContent}
                onPress={() => router.navigate("/settings/settings")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: 90,
                  }}
                >
                  <FontAwesome6
                    name="gear"
                    style={{ color: body.textDark }}
                    size={20}
                  />
                  <Text style={styles.profileContentText}> Settings</Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={{ color: body.textDark }}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileContent}
                onPress={() => router.navigate("/reports/report")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: 120,
                  }}
                >
                  <FontAwesome6
                    name="bug"
                    style={{ color: body.textDark }}
                    size={20}
                  />
                  <Text style={styles.profileContentText}> Report a bug</Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={{ color: body.textDark }}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.profileContent}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: 128,
                  }}
                >
                  <FontAwesome6
                    name="user-plus"
                    style={{ color: body.textDark }}
                    size={20}
                  />
                  <Text style={styles.profileContentText}>
                    {" "}
                    Invite a friend
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={{ color: body.textDark }}
                  size={20}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.profileContent}
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
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: body.dominant,
  },
  topContainer: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: body.dominant,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: body.recessive,
    padding: 5,
    borderRadius: 5,
  },
  userIconCta: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  editCta: {
    backgroundColor: body.dominant,
    borderRadius: 50,
    padding: 5,
    position: "absolute",
    left: 120,
    top: 90,
  },
  editIcon: {
    color: body.tertiary,
  },
  userName: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    textTransform: "capitalize",
    paddingTop: 20,
  },
  userEmail: {
    color: "white",
    fontSize: 13,
  },
  editBtn: {
    width: 161,
    height: 45,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "center",
  },
  editBtnText: {
    fontSize: 15,
    fontWeight: "700",
    color: body.dominant,
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
});
