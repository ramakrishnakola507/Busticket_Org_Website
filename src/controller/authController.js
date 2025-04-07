import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {apiUrlsConstant} from "../constant/apiUrlsContant"

export const useLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
  
    return useMutation({
      mutationFn: async (credentials) => {
        try {
          const response = await axios.post(
            `${apiUrlsConstant.baseAddr}/${apiUrlsConstant.godlogin}`,
            credentials,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          return response.data;
        } catch (error) {
          // Axios wraps the error response in error.response
          const errorMessage = error.response?.data?.message || 'Login failed';
          throw new Error(errorMessage);
        }
      },
      onSuccess: (data) => {
        login(data.token, data.user);
        navigate('/'); // Navigate after successful login
      }
    });
  };

// You can add other auth-related functions here too
// For example:
export const useGoogleLogin = () => {
  // Implementation for Google login
};