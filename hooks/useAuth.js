import { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import { router, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const signup = async (
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    setLoading
  ) => {
    const router = useRouter();
    if ((firstname && lastname && email && password, confirmPassword)) {
      if (emailPattern.test(email)) {
        if (password.length < 8) {
          Alert.alert("Signup Error", "your password must be more than 8");
        } else {
          Alert.alert("Signup Error", "Email is not valid");
          if (password == confirmPassword) {
            setLoading(true);
            try {
              const res = await axios.post(
                "https://sixthtouchsever.onrender.com/auth/signup",
                {
                  firstname,
                  lastname,
                  email,
                  password,
                }
              );

              Alert.alert(res.data.message);
              router.back();
            } catch (err) {
              const errorMessage = err.response
                ? err.response.data.message
                : "An error occurred";

              setLoading(false);
              Alert.alert("Signup Error", errorMessage);
            } finally {
              setLoading(false);
            }
          } else {
            Alert.alert("Signup Error", "Password does not match");
          }
        }
      } else {
        Alert.alert("Signup Error", "Email is not valid");
      }
    } else {
      Alert.alert("Signup Error", "Please fill up the form before submission");
    }
  };

  const login = async (email, password, setLoading) => {
    setLoading(true);
    if (email && password) {
      try {
        const res = await axios.post(
          "https://sixthtouchsever.onrender.com/auth/login",
          {
            email,
            password,
          }
        );
        console.log(res.data);
        if (res.data.token) {
          Alert.alert("Login Successfully");
          await AsyncStorage.setItem("token", res.data.token);
          router.navigate("/explore");
        }
      } catch (error) {
        const errorMessage = error.response
          ? error.response.data.message
          : "An error occurred";

        Alert.alert("Login Error", errorMessage);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Login Error", "Please fill up the form before submission");
    }
  };

  return { signup, login };
};

export default useAuth;
