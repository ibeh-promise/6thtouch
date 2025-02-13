import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Modal,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";
import RNRestart from "react-native-restart";
import Courses from "@/components/Courses";
import body from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import useClicksStore from "../store/clicksStore";

export default function Page() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("");
  const [displayOverview, setDisplayOverview] = useState(false);
  const [isActive, setIsActive] = useState("all");
  const [response, setResponse] = useState([]);
  const [response2, setResponse2] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState(false);
  const click = useClicksStore((state) => state.message);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const { courses, account } = useAuth();
    const data = await courses(setLoading, setError);
    const accountData = await account(setLoading, setError);
    if (data.length != 0) {
      setError(false);
    }
    setResponse(data);
    setResponse2(accountData);
    console.log("accountData", accountData);
  };
  const handleFetchCategories = async (categories) => {
    const { coursesCategories } = useAuth();
    const data = await coursesCategories(categories, setLoading, setError);
    setResponse(data);
  };

  const categoriesActive = (data) => {
    if (isActive == data) return styles.active;
  };
  const categoriesTextActive = (data) => {
    if (isActive == data) {
      return styles.textActive;
    } else {
      return "black";
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: body.tertiary }]}>
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
              <TouchableOpacity
                onPress={() => {
                  setIsActive("robot");
                  handleFetchCategories("Robotics");
                }}
                style={[categoriesActive("robot"), styles.categoriesContent]}
              >
                <FontAwesome5
                  name="robot"
                  size={20}
                  color={isActive == "robot" ? body.tertiary : body.textDark}
                />
                <Text style={[categoriesTextActive("robot")]}> Robotics</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoriesAlignment}>
              <TouchableOpacity
                onPress={() => {
                  setIsActive("webd");
                  handleFetchCategories("Coding");
                }}
                style={[categoriesActive("webd"), styles.categoriesContent]}
              >
                <FontAwesome5
                  name="laptop-code"
                  size={20}
                  color={isActive == "webd" ? body.tertiary : body.textDark}
                />
                <Text style={[categoriesTextActive("webd")]}>
                  {" "}
                  Web Development
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsActive("pd");
                  handleFetchCategories("Robotics");
                }}
                style={[categoriesActive("pd"), styles.categoriesContent]}
              >
                <FontAwesome5
                  name="laptop-code"
                  size={20}
                  color={isActive == "pd" ? body.tertiary : body.textDark}
                />
                <Text style={[categoriesTextActive("pd")]}>
                  {" "}
                  Product Designing
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setFilter(false);
                }}
                style={{ position: "absolute", bottom: 0, left: -20 }}
              >
                <MaterialIcons name="close" size={20} color={body.textDark} />
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
              <TouchableOpacity
                onPress={() => {
                  setFilter(true);
                }}
                style={styles.categoriesContent}
              >
                <FontAwesome6 name="sort" size={20} color={body.textDark} />
              </TouchableOpacity>
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
          <>
            <FlatList
              data={response}
              renderItem={(data) => (
                <Courses
                  data={data.item}
                  accountData={response2}
                  setDisplayOverview={setDisplayOverview}
                  displayOverview={displayOverview}
                />
              )}
            />
          </>
        )}
      </View>
      {/* <Footer page={page} setPage={setPage} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  categories: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    backgroundColor: "white",
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
  active: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: body.recessive,
  },
  textActive: {
    fontWeight: "bold",
    color: "white",
  },
  activityIndicator: {
    marginTop: 200,
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
