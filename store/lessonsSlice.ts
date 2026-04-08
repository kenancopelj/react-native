import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LessonsState {
  completed: Record<string, boolean>;
}

const initialState: LessonsState = {
  completed: {},
};

const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    markComplete(state, action: PayloadAction<string>) {
      state.completed[action.payload] = true;
    },
    markIncomplete(state, action: PayloadAction<string>) {
      delete state.completed[action.payload];
    },
  },
});

export const { markComplete, markIncomplete } = lessonsSlice.actions;

const persistConfig = {
  key: "lessons",
  storage: AsyncStorage,
};

export default persistReducer(persistConfig, lessonsSlice.reducer);
