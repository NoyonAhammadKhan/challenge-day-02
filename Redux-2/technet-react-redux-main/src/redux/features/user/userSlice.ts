import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const createUser = createAsyncThunk('user/createUser', async () => {});

const userSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
});
export const {} = userSlice.actions;

export default userSlice.reducer;
