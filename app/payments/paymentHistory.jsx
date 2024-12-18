import { useEffect, useState } from "react";
import { PayWithFlutterwave } from "flutterwave-react-native";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import body from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import { router } from "expo-router";
import PaymentHistory from "@/components/PaymentHistory";

export default function Page() {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { paymentHistory } = useAuth();
      setLoading(true);
      setError(false);

      try {
        const data = await paymentHistory(setLoading, setError);
        console.log("Fetched history Data:", data);
        setResponse(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [useAuth]); // Include dependencies

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
        <View style={styles.container2}>
          <FlatList
            data={response}
            renderItem={({ item }) => <PaymentHistory history={item} />}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: body.dominant,
    paddingTop: 30,
    paddingHorizontal: 0,
  },
  container2: {
    flex: 1,
    width: "100%",
    backgroundColor: body.tertiary,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
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
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentButton: {
    width: "100%",
    padding: 15,
    borderRadius: 30,
    backgroundColor: body.dominant,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  paymentButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  thumbnail: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  paymentReview: {
    flexDirection: "column",
    alignItems: "flex-starts",
    justifyContent: "center",
  },
  paymentReviewTopics: {
    width: 80,
    padding: 20,
    backgroundColor: body.darkDominant,
    marginRight: 30,
    borderRadius: 5,
  },
});
