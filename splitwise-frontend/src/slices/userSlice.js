import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for login
export const login = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
      return await response.json(); // Returns user data (e.g., token, user info)
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for signup
export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }
      return await response.json(); // Returns user data (e.g., token, user info)
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const user = (() => {
  try {
    return JSON.parse(localStorage.getItem('user')) || null;
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
    return null;
  }
})();


const userSlice = createSlice({
  name: 'user',
  initialState: {
        user: (() => {
      try {
        return JSON.parse(localStorage.getItem('user')) || null;
      } catch {
        return null;
      }
    })(), 
    token: localStorage.getItem('token') || null, 
    status: 'idle',
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem('user'); // Clear from localStorage
      localStorage.removeItem('token'); // Clear token
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user; // Store user info
        state.token = action.payload.token; // Store token
        localStorage.setItem('user', JSON.stringify(action.payload.user)); // Save to localStorage
        localStorage.setItem('token', action.payload.token); // Save token to localStorage
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });

    // Signup
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user; // Store user info
        state.token = action.payload.token; // Store token
        localStorage.setItem('user', JSON.stringify(action.payload.user)); // Save to localStorage
        localStorage.setItem('token', action.payload.token); // Save token to localStorage
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
