import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import body from "@/constants/Colors";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import MyCourses from "@/components/MyCourses";
import { router } from "expo-router";
import useAuth from "@/hooks/useAuth";

export default function Page() {
  const [displayOverview, setDisplayOverview] = useState(false);
  const [response2, setResponse2] = useState({});
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState(false);
  const [isActive, setIsActive] = useState("all");

  const handleFetch = async () => {
    const { myCourses } = useAuth();
    const data = await myCourses(setLoading, setError);
    if (data.length != 0) {
      setError(false);
    }
    setResponse(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const categoriesActive = (data) => {
    if (isActive == data) return styles.active;
  };
  const categoriesTextActive = (data) => {
    if (isActive == data) return styles.textActive;
  };
  return (
    <View style={styles.container}>
      <View
        style={[styles.topContainer, { backgroundColor: body.darkDominant2 }]}
      >
        {filter ? (
          <View style={styles.categories}>
            <View style={styles.categoriesAlignment}>
              <TouchableOpacity
                onPress={() => {
                  setIsActive("all");
                  handleFetch();
                }}
                style={[categoriesActive("all"), styles.categoriesContent]}
              >
                <FontAwesome6
                  name="earth-africa"
                  size={20}
                  color={isActive == "all" ? body.tertiary : body.textDark}
                />
                <Text style={[categoriesTextActive("all")]}>
                  {" "}
                  All Categories
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.categories}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setIsActive("all");
                  handleFetch();
                }}
                style={[categoriesActive("all"), styles.categoriesContent]}
              >
                <FontAwesome6
                  name="earth-africa"
                  size={20}
                  color={isActive == "all" ? body.tertiary : body.textDark}
                />
                <Text style={[categoriesTextActive("all")]}>
                  {" "}
                  All Categories
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => {
                  setFilter(true);
                }}
                style={styles.categoriesContent}
              >
                <FontAwesome6 name="sort" size={20} color={body.textDark} />
              </TouchableOpacity> */}
            </View>
          </View>
        )}

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
          <FlatList
            data={response}
            renderItem={({ item }) => (
              <MyCourses
                data={item}
                setDisplayOverview={setDisplayOverview}
                displayOverview={displayOverview}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: body.tertiary,
  },
  topContainer: {
    flex: 1,
    backgroundColor: body.darkDominant2,
  },
  categories: {
    width: "100%",
    backgroundColor: body.tertiary,
    padding: 20,
    flexDirection: "row",
    // justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: body.dominant,
    marginBottom: 10,
  },
  categoriesContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  categoriesAlignment: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  activityIndicator: {
    marginTop: 200,
  },
  active: {
    backgroundColor: body.recessive,
    padding: 5,
    borderRadius: 5,
  },
  textActive: {
    color: body.tertiary,
    fontWeight: 700,
  },
  notifyContainer: {
    backgroundColor: body.complementary,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  notifyText: {
    color: body.textDark,
    fontSize: 23,
    fontWeight: "800",
  },
  notifyBtn: {
    backgroundColor: body.dominant2,
    width: "100%",
    marginVertical: 20,
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
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
