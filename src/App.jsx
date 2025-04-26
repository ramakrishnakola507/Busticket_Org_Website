// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import BaseLayout from './layout/BaseLayOut';
import ProtectedRoute from './utils/ProtectedRoute';
import SignIn from './Pages/authPages/SignIn';
import ContentMain from './components/ContentMain/ContentMain';
import '../src/layout/Content/Content.css';
import Otp from './Pages/authPages/Otp';
import NotFound from './Pages/authPages/NotFound';




function App() {
  return (
    <Routes>
      {/* Auth routes - no sidebar/header */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        {/* OTP Verification Page */}
        <Route path="/Otp" element={<Otp />} />
        {/* NotFound route must be last */}
        <Route path="*" element={<NotFound />} />
        

        {/* Add other auth routes here (register, forgot password, etc.) */}
      </Route>

      {/* Protected routes - with sidebar/header */}
      <Route element={<ProtectedRoute />}>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<ContentMain />} />
         
          
          {/* Add other protected routes here */}

        </Route>


      </Route>
    </Routes>
  );
}

export default App;