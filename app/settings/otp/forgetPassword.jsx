import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useAuth from "@/hooks/useAuth";
import body from "@/constants/Colors";
export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const { requestOtp } = useAuth();
    await requestOtp(email, setLoading);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {loading && <Modal transparent={true} />}

        <View style={styles.formCta}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <View style={{ width: "80%" }}>
            <Text style={{ fontWeight: "bold", marginTop: 20 }}>
              A code will be sent to the email you entered
            </Text>
          </View>
          <TouchableOpacity style={styles.otpBtn} onPress={handleSubmit}>
            {loading && <ActivityIndicator />}

            <Text style={styles.otpButtonText}>Receive Code</Text>
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
    height: "90%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  formCta: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#E2E2E2",
    padding: 10,
    width: Dimensions.get("window").width - 50,
    height: 54,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "500",
  },

  otpBtn: {
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
  },
  otpButtonText: {
    color: "#f2f2f2",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },

  eyeIcon: {
    backgroundColor: "transparent",
  },
});
