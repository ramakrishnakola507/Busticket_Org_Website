// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import BaseLayout from './layout/BaseLayOut';
import ProtectedRoute from './utils/ProtectedRoute';
import SignIn from './Pages/authPages/SignIn';
import ContentMain from './components/ContentMain/ContentMain';
import '../src/layout/Content/Content.css';
import CreateOrganization from './Pages/organization/CreateOrganization';
import CreateSuperadmin from './Pages/organization/CreateSuperadmin';


import ViewOrganizations from './Pages/organization/ViewOrganization';
import Viewgodusers from './Pages/organization/Viewgodusers';
import Viewusers from './Pages/organization/Viewusers';
import Viewlogs from './Pages/organization/Viewlogs';
import UpdatePassword from './Pages/settings/UpdatedPassword';
import CreateGod from './Pages/organization/CreateGod';



function App() {
  return (
    <Routes>
      {/* Auth routes - no sidebar/header */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        {/* Add other auth routes here (register, forgot password, etc.) */}
      </Route>

      {/* Protected routes - with sidebar/header */}
      <Route element={<ProtectedRoute />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<ContentMain />} />
         
          <Route path="/create-organization" element={<CreateOrganization/>} />
          <Route path="/create-superadmin" element={<CreateSuperadmin/>} />
         
          <Route path="/view-orgnization" element={<ViewOrganizations/>} /> 
          <Route path="/view-godusers" element={<Viewgodusers/>} /> 
          <Route path="/view-users" element={<Viewusers/>} /> 
          <Route path="/view-logs" element={<Viewlogs/>} /> 
          <Route path="/update-password" element={<UpdatePassword/>} /> 
          <Route path="/create-god" element={<CreateGod/>} /> 
          
          {/* Add other protected routes here */}

        </Route>


      </Route>
    </Routes>
  );
}

export default App;