import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import body from "@/constants/Colors";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "@/hooks/useAuth";
import { Video } from "expo-av";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const { coursesById } = useAuth();
      const data = await coursesById(setLoading, setError);
      setResponse(data);
      console.log("data overview", response.topics);
    };
    fetchData();
  }, []);

  const handleFetch = async () => {
    const { coursesById } = useAuth();
    setLoading(true);
    setError(false);

    try {
      const data = await coursesById(setLoading, setError);
      console.log("Refreshed Data:", data);
      setResponse(data);
    } catch (err) {
      console.error("Error refreshing data:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const getItem = async () => {
    try {
      const data = await AsyncStorage.getItem("title");
      setTitle(data);
    } catch (error) {
      throw error;
    }
  };

  getItem();

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size={50}
          color={"white"}
          style={styles.activityIndicator}
        />
      ) : error ? (
        <View style={styles.errorContainer}>
          <View style={styles.errorContainerContent}>
            <Text style={styles.errorText}>Network Connection Error</Text>
            <TouchableOpacity style={styles.errorBtn} onPress={handleFetch}>
              <Text style={styles.errorText}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <View style={{ width: "100%" }}>
            <Text style={styles.contentText}>{title}</Text>
          </View>
          <Image source={{ uri: response.thumbnail }} style={styles.image} />
          <View style={styles.OverviewContainer}>
            <FlatList
              data={response.topics}
              renderItem={({ item }) => (
                <ScrollView>
                  <View style={styles.contentContainer}>
                    <Text style={styles.contentText}>{item.title}</Text>
                  </View>
                </ScrollView>
              )}
            />
          </View>
          <View style={{ width: "100%", position: "absolute", bottom: 30 }}>
            {response.isPaid ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  router.navigate("/payments/payment");
                }}
              >
                <Text style={styles.enrollText}>Enroll Now</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  router.navigate("/coursesOverview/courseView");
                }}
              >
                <Text style={styles.enrollText}>Start Learning</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: body.dominant,
    padding: 30,
    alignItems: "center",
    overflow: "scroll",
  },
  text: {
    color: body.tertiary,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "800",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  OverviewContainer: {
    backgroundColor: body.complementary,
    borderRadius: 10,
    padding: 20,
    width: "100%",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentText: {
    color: body.tertiary,
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
  button: {
    padding: 15,
    width: "100%",
    backgroundColor: body.tertiary,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  enrollText: {
    color: body.dominant,
    fontSize: 15,
    fontWeight: "800",
  },
});
