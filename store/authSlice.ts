import { api } from '@/src/service/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for checking auth
export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, thunkAPI) => {
  try {
    const res = await api.get('auth/user/me');
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue('Failed to check authentication');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => { state.loading = true; })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;