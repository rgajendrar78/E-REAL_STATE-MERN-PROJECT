import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp, signOut } from "../services/authService";

// Action creators
export const signUpUser = createAsyncThunk(
  "user/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await signUp(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signIn",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await signIn(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOutUser = createAsyncThunk(
  "user/signOut",
  async (_, { rejectWithValue }) => {
    try {
      signOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
