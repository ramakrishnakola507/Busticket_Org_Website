import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import {apiUrlsConstant} from "../constant/apiUrlsContant"

// // Fetch All Organizations
// export const usecreateOrganizations = () => {
//   return useQuery({
//     queryKey: ['organizations'],
//     queryFn: async () => {
//       const response = await axios.post(`${apiUrlsConstant.baseAddr}/${apiUrlsConstant.createorganisationurl}`);
//       return response.data;
//     },
//     staleTime: 1000 * 60 * 5, // 5 minutes cache time
//   });
// };

// // Fetch Single Organization by ID
// export const useFetchOrganizationBorganizationsyId = (id) => {
//   return useQuery({
//     queryKey: ['organization', id],
//     queryFn: async () => {
//       const response = await axios.get(`${API_URL}/${id}`);
//       return response.data;
//     },
//     enabled: !!id, // Only run if ID is provided
//   });
// };

// Create Organization
export const useCreateOrganization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (organizationData) => {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      const response = await axios.post(
        `${apiUrlsConstant.baseAddr}/${apiUrlsConstant.createorganisationurl}`,
        organizationData,
        {
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Add token to request headers
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['organizations']); // Refetch organizations after creating
    },
  });
};


// // Update Organization
// export const useUpdateOrganization = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ id, updatedData }) => {
//       const response = await axios.put(`${API_URL}/update/${id}`, updatedData, {
//         headers: { 'Content-Type': 'application/json' },
//       });
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['organizations']); // Refetch organizations after updating
//     },
//   });
// };

// // Delete Organization
// export const useDeleteOrganization = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (id) => {
//       await axios.delete(`${API_URL}/delete/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['organizations']); // Refetch organizations after deleting
//     },
//   });
// };
