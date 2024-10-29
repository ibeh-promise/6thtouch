import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  // axios.get("http://localhost:3000").then((res) => console.log(res.data));

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/images/adaptive-icon.png")}
          style={{ width: 130, height: 130 }}
        />
        <Text style={styles.text}>Welcome To 6thoutch</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => router.navigate("/login")}
          >
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.navigate("/signup")}
            style={styles.signupBtn}
          >
            <Text style={styles.signupButtonText}>SIGNUP</Text>
          </TouchableOpacity>
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
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 320,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#586FBD",
    borderRadius: 5,
    padding: 10,
  },
  signupBtn: {
    width: "100%",
    backgroundColor: "#586FBD",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#586FBD",
    padding: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#586FBD",
    textAlign: "center",
  },
  signupButtonText: {
    color: "#f2f2f2",
    textAlign: "center",
  },
});
