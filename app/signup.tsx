import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:3000/signup", {
          firstname,
          lastname,
          email,
          password,
        })
        .then((res) => console.log(res.data));
    } catch (err) {
      console.log(err);
    }

    // useAuth(firstname, lastname, email, password);
  };
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={{ width: 130, height: 130 }}
        />
        <Text style={styles.text}>6thtouch</Text>
        <Text style={styles.textWelcome}>Hello newbee! Create an account</Text>
        <View
          style={{
            width: "100%",
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="First name"
            onChangeText={(text) => setFirstname(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last name"
            onChangeText={(text) => setLastname(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email id"
            onChangeText={(text) => setEmail(text)}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            />
            <FontAwesome
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? "eye" : "eye-slash"}
              color="grey"
              size={18}
              style={styles.eyeIcon}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>Sign up</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 15,
            }}
          >
            <Text>Already have an account?, </Text>
            <Text
              style={{ color: "#586FBD" }}
              onPress={() => router.navigate("/login")}
            >
              Login
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "f2f2f2",
    flex: 1,
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
});
