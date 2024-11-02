import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import body from "../constants/Colors";
import useAuth from "../hooks/useAuth";

export default function Page() {
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signup, error, response } = useAuth();

  const handleSubmit = async () => {
    const result = await signup(firstname, lastname, email, password);

    if (result) {
      Alert.alert("Signup Successful", result);
      router.navigate("/login");
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Signup Error", error);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>6thtouch</Text>
      <Text style={styles.textWelcome}>Hello newbee! Create an account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First name"
          onChangeText={setFirstname}
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          onChangeText={setLastname}
        />
        <TextInput
          style={styles.input}
          placeholder="Email id"
          onChangeText={setEmail}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            placeholder="Password"
            onChangeText={setPassword}
          />
          <FontAwesome
            onPress={() => setShowPassword((prev) => !prev)}
            name={showPassword ? "eye" : "eye-slash"}
            color="grey"
            size={18}
            style={styles.eyeIcon}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.loginRedirect}>
          <Text>Already have an account? </Text>
          <Text
            style={{ color: "#586FBD" }}
            onPress={() => router.navigate("/login")}
          >
            Login
          </Text>
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
  inputContainer: {
    backgroundColor: body.tertiary,
    width: "100%",
    height: "90%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#586FBD",
    fontSize: 24,
    fontWeight: "bold",
  },
  textWelcome: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    width: 320,
    borderRadius: 5,
    marginTop: 20,
  },
  passwordInput: {
    width: 295,
    borderRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
  },
  loginBtn: {
    width: 320,
    backgroundColor: "#586FBD",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#f2f2f2",
    textAlign: "center",
  },
  passwordInputContainer: {
    width: 320,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  eyeIcon: {
    backgroundColor: "transparent",
  },
  loginRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
  },
});
