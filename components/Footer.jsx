import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import body from "@/constants/Colors";

export default function Footer({ page, setPage }) {
  const router = useRouter();
  const navigateTo = (pageName) => {
    router.navigate(`/${pageName}`);
  };

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.nav, page === "explore" ? styles.active : null]}
          onPress={() => navigateTo("explore")}
        >
          <FontAwesome
            name="wpexplorer"
            size={25}
            color={page === "explore" ? body.dominant : body.tertiary}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>Explore</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.nav, page === "courses" ? styles.active : null]}
          onPress={() => navigateTo("courses")}
        >
          <FontAwesome
            name="home"
            size={25}
            color={page === "courses" ? body.dominant : body.tertiary}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>Courses</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.nav, page === "account" ? styles.active : null]}
          onPress={() => navigateTo("account")}
        >
          <FontAwesome
            name="user-circle"
            size={25}
            color={page === "account" ? body.dominant : body.tertiary}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: body.dominant,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-around",
  },
  navContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 20,
  },
  active: {
    backgroundColor: body.tertiary,
  },
  navText: {
    color: body.tertiary,
    marginTop: 10,
    fontWeight: "800",
  },
});
