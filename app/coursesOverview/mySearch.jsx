import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import body from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Page() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const { myCourses } = useAuth();
    const data = await myCourses(setLoading, setError);
    setResponse(data);
    setError(false);
  };

  const searchCourse = async () => {
    const { searchMyCourses } = useAuth();
    const data = await searchMyCourses(query, setLoading, setError);
    setResponse(data);
    setError(false);
  };

  const handleEnroll = async (id, title) => {
    try {
      await AsyncStorage.setItem("id", id);
      await AsyncStorage.setItem("title", title);
      console.log(id);
      router.navigate("/coursesOverview/overview");
    } catch (error) {
      throw error;
    }
  };
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
        <View style={styles.container}>
          <View style={styles.searchContentContainer}>
            <View style={styles.searchInputContainer}>
              <TextInput
                onChangeText={(text) => setQuery(text)}
                placeholder="Search... "
                style={styles.searchInput}
                value={query}
              />
              <TouchableOpacity onPress={searchCourse}>
                <FontAwesome
                  name="search"
                  color="grey"
                  size={18}
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
            {!response ? (
              <Text style={{ textAlign: "center" }}>No results found</Text>
            ) : (
              <View>
                <FlatList
                  data={response}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{
                        backgroundColor: body.dominant,
                        borderRadius: 10,
                        padding: 20,
                        marginVertical: 10,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onPress={() => handleEnroll(item.id, item.title)}
                    >
                      <FontAwesome5
                        name="book-open"
                        color={body.tertiary}
                        size={20}
                      />
                      <View style={{ marginLeft: 20 }}>
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "600",
                            marginBottom: 5,
                            fontSize: 20,
                          }}
                          numberOfLines={1}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{ color: body.tertiary, fontWeight: "600" }}
                          numberOfLines={2}
                        >
                          {item.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  searchContentContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: body.tertiary,
    padding: 10,
    paddingHorizontal: 20,
  },

  searchInputContainer: {
    width: Dimensions.get("window").width - 50,
    backgroundColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: 0,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
  },
  searchInput: {
    width: Dimensions.get("window").width - 80,
    borderRadius: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 10,
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  eyeIcon: {
    backgroundColor: "transparent",
    color: "black",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainerContent: {
    width: 200,
    padding: 20,
    backgroundColor: body.darkDominant,
  },
  errorText: {
    color: body.tertiary,
    fontSize: 15,
  },
  errorBtn: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: body.dominant2,
  },
});
