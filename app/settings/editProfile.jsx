import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useAuth from "@/hooks/useAuth";
import body from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Page() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { account } = useAuth();
      const data = await account(setLoading, setError);
      setUserAvatar(data.avatar);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (loading) return;
    const { editProfile } = useAuth();
    await editProfile(firstName, lastName, email, setLoading);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image style={styles.uploadCta} source={{ uri: userAvatar }} />
        <View style={styles.formCta}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={(text) => setLastName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            {loading && <ActivityIndicator />}

            <Text style={styles.submitButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: body.dominant,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container2: {
    backgroundColor: body.tertiary,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  formCta: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  input: {
    backgroundColor: body.tertiary,
    padding: 10,
    width: Dimensions.get("window").width - 50,

    borderRadius: 10,
    marginTop: 30,
    fontSize: 18,
    fontWeight: "500",
    borderWidth: 1,
  },
  submitBtn: {
    width: Dimensions.get("window").width - 50,
    backgroundColor: body.dominant,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    height: 54,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  submitButtonText: {
    color: "#f2f2f2",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },

  uploadCta: {
    backgroundColor: "#E2E2E2",
    width: 160,
    height: 126,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
});
