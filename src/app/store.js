import { Store } from '@mui/icons-material';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
