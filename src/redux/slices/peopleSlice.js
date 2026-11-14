import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/people");
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchHomeworld = createAsyncThunk(
  "people/fetchHomeworld",
  async (homeworldUrl, { rejectWithValue }) => {
    try {
      const response = await api.get(homeworldUrl)
      return response.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    selectedPerson: null,
    homeworld: null,
    homeworldStatus: "idle"
  },
  reducers: {
    setSelectedPerson: (state, action) => {
      state.selectedPerson = action.payload
      state.homeworld = null
      state.homeworldStatus = "idle"
    },
    clearSelectedPerson: (state) => {
      state.selectedPerson = null
      state.homeworld = null
      state.homeworldStatus = "idle"
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items = action.payload
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(fetchHomeworld.pending, (state) => {
        state.homeworldStatus = "loading"
      })
      .addCase(fetchHomeworld.fulfilled, (state, action) => {
        state.homeworldStatus = "succeeded"
        state.homeworld = action.payload
      })
      .addCase(fetchHomeworld.rejected, (state) => {
        state.homeworldStatus = "failed"
      })
  }
})

export const { setSelectedPerson, clearSelectedPerson } = peopleSlice.actions
export default peopleSlice.reducer