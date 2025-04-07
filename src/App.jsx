// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import BaseLayout from './layout/BaseLayOut';
import ProtectedRoute from './utils/ProtectedRoute';
import SignIn from './Pages/authPages/SignIn';
import ContentMain from './components/ContentMain/ContentMain';
import '../src/layout/Content/Content.css';




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
         
          
          {/* Add other protected routes here */}

        </Route>


      </Route>
    </Routes>
  );
}

export default App;