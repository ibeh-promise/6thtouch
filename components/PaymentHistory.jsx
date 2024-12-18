import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PaymentHistory({ history }) {
  console.log("history", history);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          {history.course.title}
        </Text>
        <Text>
          {history.updatedAt.split("T")[0]}
          {", "}
          {history.updatedAt.split("T")[1].split(".")[0]}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          ${history.course.price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginVertical: 10,
  },
});
