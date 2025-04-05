import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { useLocation } from "react-router-dom";

const ContentTop = () => {
  const { toggleSidebar, showTopContent } = useContext(SidebarContext);
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/create-god":
        return "Create God";
      case "/create-organization":
        return "Create Organization";
        case "/create-superadmin":
        return "Create Member"; 
        case "/view-orgnization":
        return "View Organization"; 
        case "/view-godusers":
        return "View Godusers"; 
        case "/view-users":
        return "View Users"; 
        case "/view-logs":
        return "View Logs";  
        case "/view-all pos machine":
        return "View all pos machine";   
        case "/update-password":
        return "Updated-Password";   
      default:
        return "Home";
    }
  };

  return (
    <div id="main-content-top">
      <div id="content-top-left">
        <button type="button" id="sidebar-toggler" onClick={toggleSidebar}>
          <img src={iconsImgs.menu} alt="Toggle sidebar" />
        </button>
        <h3 className={`${showTopContent} smm:block`} id="content-top-title">
          {getTitle()}
        </h3>
      </div>
      <div id="content-top-btns" className={`${showTopContent} smm:block`}>
        <button type="button" id="content-top-btn">
          <img src={iconsImgs.search} alt="Search" />
        </button>
        <button id="content-top-btn">
          <img src={iconsImgs.bell} alt="Notifications" />
          <span id="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;