import { useState } from "react";
import axios from "axios";

const [error, setError] = useState("");
const [response, setResponse] = useState("");

const useAuth = async (firstname, lastname, email, password) => {
  const signup = async () => {
    try {
      const response = await axios
        .post("http://localhost:1030/auth/signup", {
          firstname,
          lastname,
          email,
          password,
        })
        .then((res) => {
          setResponse(res.data);
          console.log(res.data);
        });
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };
  return { signup, error, response };
};
export default useAuth;
