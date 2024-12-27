import { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import { router, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const signup = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    setLoading
  ) => {
    if (firstName && lastName && email && password && confirmPassword) {
      if (emailPattern.test(email)) {
        if (password.length < 8) {
          Alert.alert(
            "Signup Error",
            "Your password must be more than 8 characters"
          );
        } else {
          if (password == confirmPassword) {
            setLoading(true);
            try {
              const res = await axios.post(
                "https://6thtouchsever.vercel.app/auth/signup",
                {
                  firstName,
                  lastName,
                  email,
                  password,
                }
              );

              Alert.alert("", res.data.message);
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
    if (email && password) {
      setLoading(true);

      try {
        const res = await axios.post(
          "https://6thtouchsever.vercel.app/auth/login",
          {
            email,
            password,
          }
        );
        console.log(res.data);
        if (res.data.token) {
          Alert.alert("", "Login Successfully");
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

  const account = async (setLoading) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://6thtouchsever.vercel.app/user/me/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      if (err) throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const response = await axios.delete(
        "https://6thtouchsever.vercel.app/user/me/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Account deleted successfully:", response.data);
      return response.data;
    } catch (err) {
      if (err.response) {
        console.error("Error response:", err.response.data);
      } else if (err.request) {
        console.error("Error request:", err.request);
      } else {
        console.error("Error message:", err.message);
      }
    }
  };

  const editProfile = async (firstName, lastName, email, setLoading) => {
    if (!firstName && !lastName && !email) {
      Alert.alert("Edit Profile Error", "please fill form before submission");
    } else {
      try {
        setLoading(true);
        const token = await AsyncStorage.getItem("token");
        const response = await axios.patch(
          "https://6thtouchsever.vercel.app/user/me",
          {
            firstName,
            lastName,
            email,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Alert.alert("", response.data.message);

        return response;
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred. Please try again.";
        Alert.alert("Uploading Error", errorMessage);
      } finally {
        setLoading(false);
        router.dismiss(2);
      }
    }
  };

  const changeAvatar = async (avatar, setLoading) => {
    try {
      setLoading(true);
      if (!avatar) {
        Alert.alert(
          "Edit Profile Error",
          "Please upload a file before submission"
        );
        return;
      }

      const formData = new FormData();
      formData.append("avatar", {
        uri: avatar, // File URI
        name: "avatar.jpg", // File name
        type: "image/jpeg", // MIME type
      });

      const token = await AsyncStorage.getItem("token");

      const response = await axios.patch(
        "https://6thtouchsever.vercel.app/user/changeAvatar",
        formData, // Pass FormData directly
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Alert.alert("Success", response.data.message || "Avatar updated!");
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      Alert.alert("Uploading Error", errorMessage);
    } finally {
      setLoading(false);
      router.back();
    }
  };

  const changePassword = async (
    currentPassword,
    newPassword,
    confirmPassword,
    setLoading
  ) => {
    if (!currentPassword && !newPassword && !confirmPassword) {
      Alert.alert(
        "Change Password Error",
        "please fill form before submission"
      );
    } else {
      if (newPassword !== confirmPassword) {
        Alert.alert("Change Password Error", "Passwords does not match");
      } else if (newPassword.length < 8) {
        Alert.alert(
          "Change Password Error",
          "Your password must be more than 8 characters"
        );
      } else {
        try {
          setLoading(true);
          const token = await AsyncStorage.getItem("token");

          const response = await axios.patch(
            "https://6thtouchsever.vercel.app/auth/changePassword",
            {
              newPassword,
              currentPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          Alert.alert("", response.data.message);
          return response;
        } catch (error) {
          Alert.alert("", "Network error");
        } finally {
          setLoading(false);
          router.back();
        }
      }
    }
  };

  const requestOtp = async (email, setLoading) => {
    setLoading(true);
    if (emailPattern.test(email)) {
      try {
        await AsyncStorage.setItem("email", email);
        const response = await axios.post(
          "https://6thtouchsever.vercel.app/auth/requestOTP",
          {
            email,
          }
        );
        Alert.alert("", response.data.message);
        router.navigate("/settings/otp/verifyOtp");
        return response;
      } catch (error) {
        Alert.alert("", "Network error");
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Request Error", "Enter a valid email");
    }
  };
  const verifyOtp = async (otp, setLoading) => {
    setLoading(true);
    if (otp) {
      try {
        const email = await AsyncStorage.getItem("email");
        const response = await axios.post(
          "https://6thtouchsever.vercel.app/auth/verifyOTP",
          {
            email,
            otp,
          }
        );
        Alert.alert("", response.data.message);
        router.navigate("/settings/otp/changePassword");
        return response;
      } catch (error) {
        Alert.alert(
          "",
          error.response?.data?.message || "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Verification Error", "please type in your OTP code");
    }
  };
  const resetPassword = async (newPassword, confirmPassword, setLoading) => {
    if (!newPassword && !confirmPassword) {
      Alert.alert(
        "Change Password Error",
        "please fill form before submission"
      );
    } else {
      if (newPassword !== confirmPassword) {
        Alert.alert("Change Password Error", "Passwords does not match");
      } else if (newPassword.length < 8) {
        Alert.alert(
          "Change Password Error",
          "Your password must be more than 8 characters"
        );
      } else {
        try {
          setLoading(true);
          const email = await AsyncStorage.getItem("email");

          const response = await axios.patch(
            "https://6thtouchsever.vercel.app/auth/resetPassword",
            {
              email,
              newPassword,
            }
          );
          Alert.alert("", response.data.message);

          return response;
        } catch (error) {
          Alert.alert("", "Network error");
        } finally {
          setLoading(false);
          router.dismiss(3);
        }
      }
    }
  };

  const courses = async (setLoading, setError) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://6thtouchsever.vercel.app/courses/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
      setError(false);
    } catch (error) {
      console.error(error.message);
      if (error.message) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };
  const coursesCategories = async (categories, setLoading, setError) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        `https://6thtouchsever.vercel.app/courses/category/${categories}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
      setError(false);
    } catch (error) {
      console.error(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const coursesById = async (setLoading, setError) => {
    try {
      setLoading(true);
      const id = await AsyncStorage.getItem("id");
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        `https://6thtouchsever.vercel.app/courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("recieved data", response.data);
      return response.data;
      setError(false);
    } catch (error) {
      console.error(error.message);
      if (error.message) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };
  const topicsByCourseId = async (setLoading, setError) => {
    try {
      setLoading(true);
      const id = await AsyncStorage.getItem("id");
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        `https://6thtouchsever.vercel.app/courses/${id}/topics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("recieved data", response.data);
      return response.data;
      setError(false);
    } catch (error) {
      console.error(error.message);
      if (error.message) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };
  const myCourses = async (setLoading, setError) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://6thtouchsever.vercel.app/courses/myCourses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
      setError(false);
    } catch (error) {
      console.error(error.response);
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      Alert.alert("Fetching Data Error", errorMessage);
      if (error.message) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };
  const createPayment = async (
    courseId,
    transactionId,
    paymentReference,
    setLoading,
    setError
  ) => {
    try {
      setLoading(true);
      console.log(courseId, transactionId, paymentReference);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.post(
        "https://6thtouchsever.vercel.app/payments/create",
        {
          courseId,
          transactionId,
          paymentReference,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Sent to backend", response.data);
      return response.data;
      setError(false);
    } catch (error) {
      console.error(error.message);
      if (error.message) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };
const searchCourse = async (query, setLoading, setError) => {
  setLoading(true); // Start loading
  setError(false);  // Reset error state
  
  try {
    // Validate query input
    if (!query.trim()) {
      Alert.alert("", "Make sure you are typing");
      setLoading(false); // Stop loading if invalid
      return;
    }

    const result = await axios.get(
      `https://6thtouchsever.vercel.app/courses/search/?q=${encodeURIComponent(query.trim())}`
    );
    console.log("Search Result:", result.data); 
    return result.data
  } catch (error) {
    console.error("Search Error:", error.response || error.message || error);
    setError(true); 
  } finally {
    setLoading(false);
  }
};
const searchMyCourses = async (query, setLoading, setError) => {
  setLoading(true); // Start loading
  setError(false);  // Reset error state
  
  try {
    // Validate query input
    if (!query.trim()) {
      Alert.alert("", "Make sure you are typing");
      setLoading(false); // Stop loading if invalid
      return;
    }
    const token = await AsyncStorage.getItem("token");

    const result = await axios.get(
      `https://6thtouchsever.vercel.app/courses/myCourses/search/?q=${encodeURIComponent(query.trim())}`,
       {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
    );
    console.log("Search Result:", result.data); 
    return result.data
  } catch (error) {
    console.error("Search Error:", error.response || error.message || error);
    setError(true); 
  } finally {
    setLoading(false);
  }
};

  const paymentHistory = async (setLoading, setError) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get(
        "https://6thtouchsever.vercel.app/payments/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("result ", response.data);
      return response.data;
      setError(false);
    } catch (error) {
      console.error(error.message);
      if (error.message) {
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const createReport = async (
    title,
    message,
    setLoading
  ) => {
    if (!title && !message ) {
      Alert.alert(
        "Send Bug Error",
        "please fill form before submission"
      );
    } else {      
        try {
          setLoading(true);
          const token = await AsyncStorage.getItem("token");
          const response = await axios.post(
            "https://6thtouchsever.vercel.app/reports/create",
            {
              title,
              message,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          Alert.alert("", response.data.message);
          return response;
        } catch (error) {
          Alert.alert("", "Network error");
          console.log(error.message)
        } finally {
          setLoading(false);
          router.back();
        }
    }
  };

  return {
    signup,
    login,
    account,
    deleteAccount,
    changePassword,
    editProfile,
    changeAvatar,
    requestOtp,
    verifyOtp,
    resetPassword,
    courses,
    coursesCategories,
    coursesById,
    topicsByCourseId,
    myCourses,
    createPayment,
    searchCourse,
    searchMyCourses,
    paymentHistory,
    createReport,
  };
};

export default useAuth;
