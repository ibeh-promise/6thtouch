import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import useAuth from "@/hooks/useAuth";
import body from "@/constants/Colors";
export default function Page() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (loading) return;
    const { createReport } = useAuth();
    const data = await createReport(title, message, setLoading);
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={{ fontWeight: 700, marginTop: 20, fontSize: 16 }}>
          What's the issue
        </Text>
        <Text style={{ fontSize: 16 }}>
          Your report let us know how to improve our app
        </Text>
        <View style={styles.formCta}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={styles.messageInput}
            placeholder="Message"
            onChangeText={(text) => setMessage(text)}
            numberOfLines={20}
            multiline={true}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            {loading && <ActivityIndicator />}

            <Text style={styles.submitButtonText}>Send Report</Text>
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
  messageInput: {
    backgroundColor: body.tertiary,
    padding: 10,
    width: Dimensions.get("window").width - 50,
    height: 200,
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
