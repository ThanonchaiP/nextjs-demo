import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAPIVersion } from "services/api.service";
import { RootState } from "store/configureStore";
import { Version } from "types/version.types";

type Profile = {
  id: number;
  fullname: string;
  email: string;
};

type AuthState = {
  profile?: Profile;
  apiVersion?: Version;
};

const initialState: AuthState = {
  profile: undefined,
  apiVersion: undefined,
};

export const getVersionAsync = createAsyncThunk("auth/getVersion", async () => {
  const response = await getAPIVersion();
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getProfile: (state, actions: PayloadAction<Profile>) => {
      state.profile = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVersionAsync.fulfilled, (state, action) => {
      state.apiVersion = action.payload;
    });
  },
});

export const { getProfile } = authSlice.actions;

export const selectProfile = (state: RootState) => state.auth.profile;
export const selectApiVersion = (state: RootState) => state.auth.apiVersion;

export default authSlice.reducer;
