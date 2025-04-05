// src/layout/Content/Content.jsx
import { Routes, Route } from 'react-router-dom';
import './Content.css';
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';
import CreateGod from '../../Pages/organization/CreateGod';
import ProtectedRoute from '../../utils/ProtectedRoute';
import SignIn from '../../Pages/authPages/SignIn';

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<ContentMain />} />
          <Route path="/create-god" element={<CreateGod />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Content;