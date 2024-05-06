import axios from "axios";

export const signUp = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/signUp",
      userData
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/user/signIn",
      userData
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signOut = () => {
  localStorage.clear();
};
