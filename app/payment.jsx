import React from "react";
import { PayWithFlutterwave } from "flutterwave-react-native";
import { Text, TouchableOpacity, StyleSheet, View, Alert } from "react-native";

export default function Page() {
  // Function called when the transaction is completed successfully or canceled
  const handleOnRedirect = (data) => {
    if (data.status === "successful") {
      Alert.alert(
        "Payment Successful",
        `Transaction ID: ${data.transaction_id}\nReference: ${data.tx_ref}`,
        [{ text: "OK" }]
      );
      
      console.log("Transaction successful:", data);
    } else {
      Alert.alert("Payment Cancelled", "You cancelled the transaction.", [
        { text: "OK" },
      ]);
      console.log("Transaction cancelled:", data);
    }
  };

  // Function to generate a random transaction reference
  const generateTransactionRef = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return `flw_tx_ref_${result}`;
  };

  // Payment options
  const paymentOptions = {
    tx_ref: generateTransactionRef(10),
    authorization: "FLWPUBK_TEST-bf6ef0978ed5d715b3f5b39954aa4de2-X", // Replace with your Flutterwave Public Key
    customer: {
      email: "ibehpromise3d2@gmail.com", // Replace with the customer's email
    },
    amount: 2000, // Replace with the desired payment amount
    currency: "NGN", // Change to your preferred currency
    payment_options: "card, banktransfer, ussd", // Add more payment options if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Make a Payment</Text>
      <PayWithFlutterwave
        onRedirect={handleOnRedirect}
        options={paymentOptions}
        customButton={(props) => (
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={props.onPress}
            disabled={props.disabled}
          >
            <Text style={styles.paymentButtonText}>
              Pay {paymentOptions.currency} {paymentOptions.amount}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentButton: {
    width: 200,
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    alignItems: "center",
  },
  paymentButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
