import React, { useMemo, useState } from 'react';
import { Box, CircularProgress, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { MaterialReactTable } from 'material-react-table';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaUserEdit } from "react-icons/fa";
import { LiaUsersSolid } from "react-icons/lia";
import { IoMdPersonAdd } from "react-icons/io";
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
//import { useOrganizationController ,deleteOrganizationController} from '../../controllers/OrganizationController'; // Adjust the import
//import { useTheme } from '../../ContextApi/ThemeContext '; // Adjust the import
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';

const ViewOrganizations = () => {
  // Demo data instead of API call
  const demoData = [
    {
      userId: 1,
      name: 'John Doe',
      Organization: { name: 'Tech Corp' },
      email: 'john@example.com',
      phone: '123-456-7890',
      role: 'Admin'
    },
    {
      userId: 2,
      name: 'Jane Smith',
      Organization: { name: 'Design Studio' },
      email: 'jane@example.com',
      phone: '234-567-8901',
      role: 'Editor'
    },
    {
      userId: 3,
      name: 'Bob Johnson',
      Organization: { name: 'Marketing Inc' },
      email: 'bob@example.com',
      phone: '345-678-9012',
      role: 'Viewer'
    },
    {
      userId: 4,
      name: 'Alice Williams',
      Organization: { name: 'Finance LLC' },
      email: 'alice@example.com',
      phone: '456-789-0123',
      role: 'Manager'
    },
    {
      userId: 5,
      name: 'Charlie Brown',
      Organization: { name: 'Education Group' },
      email: 'charlie@example.com',
      phone: '567-890-1234',
      role: 'Admin'
    }
  ];

  // Simulate loading state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [goduserData, setGoduserData] = useState(demoData);
  
  // For theme - using light mode by default
  const colorMode = 'light'; 
  
  // Define light and dark themes
  const theme = createTheme({
    palette: {
      mode: colorMode === 'dark' ? 'dark' : 'light',
      background: {
        default: colorMode === 'dark' ? '#24303f' : '#ffffff',
        paper: colorMode === 'dark' ? '#24303f' : '#ffffff',
      },
      text: {
        primary: colorMode === 'dark' ? '#ffffff' : '#000000',
      },
    },
  });

  // Define table columns
  const columns = useMemo(
    () => [
      { header: 'Si. No', Cell: ({ row }) => row.index + 1, size: 50 },
      {
        accessorKey: 'name',
        header: 'Name',
        Cell: ({ row }) => <p className="text-start">{row.original.name}</p>,
      },
      { accessorKey: 'Organization.name', header: 'Organization Name' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'phone', header: 'Phone Number' },
      { accessorKey: 'role', header: 'Role' },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div className="flex flex-row gap-3">
            <FaRegTrashCan
              style={{ cursor: 'pointer', color: 'red' }}
              onClick={() => handleDelete(row.original.userId)}
              data-tooltip-id="delete-tooltip"
              data-tooltip-content="Delete"
            />
          </div>
        ),
      },
    ],
    []
  );

  const handleDelete = (userId) => {
    // Filter out the user to be deleted
    const updatedData = goduserData.filter(user => user.userId !== userId);
    setGoduserData(updatedData);
    console.log('Deleted user with ID:', userId);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      {/* <Breadcrumb pageName="View All Users" /> */}
      <Box sx={{ mt: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={200}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : goduserData.length > 0 ? (
          <>
            <MaterialReactTable
              columns={columns}
              data={goduserData}
              muiTableHeadCellProps={{
                sx: {
                  backgroundColor: colorMode === 'dark' ? '#24303f' : '#29221d',
                  color: colorMode === 'dark' ? '#ffffff' : '#ffffff',
                },
              }}
              muiTableBodyCellProps={{
                sx: {
                  backgroundColor: colorMode === 'dark' ? '#24303f' : '#1C1613 ',
                  color: colorMode === 'dark' ? '#ffffff' : '#ffffff',
                },
              }}
              muiTopToolbarProps={{
                sx: {
                  backgroundColor: colorMode === 'dark' ? '#24303f' : ' #1C1613 ',
                  color: colorMode === 'dark' ? '#ffffff' : '#000000',
                },
              }}
              muiBottomToolbarProps={{
                sx: {
                  backgroundColor: colorMode === 'dark' ? '#24303f' : ' #1C1613',
                  color: colorMode === 'dark' ? '#ffffff' : '#000000',
                },
              }}
              muiTableContainerProps={{
                sx: {
                  overflow: 'hidden',
                  '&::-webkit-scrollbar': {
                    height: '8px',maxWidth: '100%', // Ensures table fits in container
                    overflow: 'hidden !important', // Force disable scrolling
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: colorMode === 'dark' ? '#4A5568' : '#969aa1',
                    borderRadius: '4px',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: colorMode === 'dark' ? '#2D3748' : '#ffffff',
                  },
                },
              }}
            />
            <Tooltip id="delete-tooltip" place="bottom" style={{ fontSize: '11px', backgroundColor: '#24303f', padding: '3px' }} />
          </>
        ) : (
          <Typography color="textSecondary" textAlign="center" py={2}>
            No data available
          </Typography>
        )}
      </Box>
    </MuiThemeProvider>
  );
};

export default ViewOrganizations;

