// src/layout/BaseLayout/BaseLayout.jsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../layout/Sidebar/Sidebar';
import ContentTop from '../components/ContentTop/ContentTop';
import '../App.css'

const BaseLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <ContentTop />
        <Outlet /> {/* This will render the protected routes */}
      </div>
    </div>
  );
};

export default BaseLayout;