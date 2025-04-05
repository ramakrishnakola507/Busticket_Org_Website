// src/layout/AuthLayout/AuthLayout.jsx
import { Outlet } from 'react-router-dom';


const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default AuthLayout;