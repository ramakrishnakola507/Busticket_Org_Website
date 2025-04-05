import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { apiUrlsConstant } from '../constant/apiUrlsContant';


// Create Super Admin
export const useCreateSuperAdmin = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: async (superAdminData) => {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `${apiUrlsConstant.baseAddr}/${apiUrlsConstant.createsuperadminurl}`,
          superAdminData,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          }
        );
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['superadmins']);
      },
    });
  };
  
//   // Fetch Super Admin by ID
//   export const useFetchSuperAdminById = (id) => {
//     return useQuery({
//       queryKey: ['superAdmin', id],
//       queryFn: async () => {
//         const response = await axios.get(`${apiUrlsConstant.baseAddr}/superAdmin/${id}`);
//         return response.data;
//       },
//       enabled: !!id,
//     });
//   };
  
//   // Update Super Admin
//   export const useUpdateSuperAdmin = () => {
//     const queryClient = useQueryClient();
  
//     return useMutation({
//       mutationFn: async ({ id, updatedData }) => {
//         const token = localStorage.getItem('token');
//         const response = await axios.put(
//           `${apiUrlsConstant.baseAddr}/superAdmin/update/${id}`,
//           updatedData,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${token}`,
//             },
//           }
//         );
//         return response.data;
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries(['superAdmins']);
//       },
//     });
//   };
  
//   // Delete Super Admin
//   export const useDeleteSuperAdmin = () => {
//     const queryClient = useQueryClient();
  
//     return useMutation({
//       mutationFn: async (id) => {
//         const token = localStorage.getItem('token');
//         await axios.delete(`${apiUrlsConstant.baseAddr}/superAdmin/delete/${id}`, {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries(['superAdmins']);
//       },
//     });
//   };
  