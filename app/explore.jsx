import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import body from "@/constants/Colors";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import Overview from "@/components/Overview";
import RootLayout from "./_layout";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("");
  const [displayOverview, setDisplayOverview] = useState(false);

  const [isActive, setIsActive] = useState("all");
  useEffect(() => {
    setPage("explore");
  }, []);
  const categoriesActive = (data) => {
    if (isActive == data) return styles.active;
  };
  const categoriesTextActive = (data) => {
    if (isActive == data) return styles.textActive;
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {displayOverview && (
          <Overview setDisplayOverview={setDisplayOverview} />
        )}
        <View style={styles.categories}>
          <View style={styles.categoriesAlignment}>
            <TouchableOpacity
              onPress={() => setIsActive("all")}
              style={[categoriesActive("all"), styles.categoriesContent]}
            >
              <FontAwesome6
                name="earth-africa"
                size={20}
                color={isActive == "all" ? body.tertiary : "black"}
              />
              <Text style={categoriesTextActive("all")}> All Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsActive("robot")}
              style={[categoriesActive("robot"), styles.categoriesContent]}
            >
              <FontAwesome5
                name="robot"
                size={20}
                color={isActive == "robot" ? body.tertiary : "black"}
              />
              <Text style={categoriesTextActive("robot")}> Robotics</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoriesAlignment}>
            <TouchableOpacity
              onPress={() => setIsActive("webd")}
              style={[categoriesActive("webd"), styles.categoriesContent]}
            >
              <FontAwesome5
                name="laptop-code"
                size={20}
                color={isActive == "webd" ? body.tertiary : "black"}
              />
              <Text style={categoriesTextActive("webd")}> Web Development</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsActive("pd")}
              style={[categoriesActive("pd"), styles.categoriesContent]}
            >
              <FontAwesome5
                name="laptop-code"
                size={20}
                color={isActive == "pd" ? body.tertiary : "black"}
              />
              <Text style={categoriesTextActive("pd")}> Product Designing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => (
            <Courses
              setDisplayOverview={setDisplayOverview}
              displayOverview={displayOverview}
            />
          )}
        />
      </View>
      <Footer page={page} setPage={setPage} />
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
    paddingBottom: 100,
    backgroundColor: body.darkDominant2,
  },
  categories: {
    width: "100%",
    backgroundColor: body.tertiary,
    height: 150,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: body.dominant,
    marginBottom: 10,
  },
  categoriesContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoriesAlignment: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  active: {
    backgroundColor: body.recessive,
    padding: 5,
    borderRadius: 5,
  },
  textActive: {
    color: body.tertiary,
  },
});
