import { useEffect, useState, useContext } from "react";
import { personsImgs } from "../../utils/images";
import { SidebarContext } from "../../context/sidebarContext";
import { RxDashboard } from "react-icons/rx";
import { CgOrganisation } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import styles from "./Sidebar.module.css"; // Import the CSS module
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [isLogsOpen, setIsLogsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const { logout } = useAuth();

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? styles.sidebarChange : "");
  }, [isSidebarOpen]);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`${styles.sidebar} ${sidebarClass}`}>
      <div className={styles.userInfo}>
        <div className={`${styles.infoImg} ${styles.imgFitCover}`}>
          <img src={personsImgs.person_two} alt="profile" />
        </div>
        <span className={styles.infoName}>alice-doe</span>
      </div>

      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {/* Dashboard Link */}
          <li className={styles.navItem}>
            <Link
              className={`${styles.navLink} ${isActive("/") ? styles.active : ""
                }`}
              to="/"
            >
              <RxDashboard />
              <span className={styles.navLinkText}>Dashboard</span>
            </Link>
          </li>


          {/* Settings Dropdown */}
          <li className={styles.navItem} onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
            <a  className={styles.navLink} style={{ justifyContent: "space-between" }}>
              <div className="flex gap-3 items-center">
                <IoSettingsSharp />
                <span className={styles.navLinkText}>Settings</span>
              </div>
              <FaChevronDown
                className={`${styles.mlAuto} ${styles.transitionTransform} ${isSettingsOpen ? styles.rotate180 : styles.rotate0
                  }`}
              />
            </a>

            {isSettingsOpen && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/update-password") ? styles.active : ""
                      }`}
                    to="/update-password"
                  >

                    <span className={styles.navlinksubText}>Update Password</span>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    className={`${styles.navLink} ${isActive("/sign-in") ? styles.active : ""
                      }`}
                    to="/sign-in"
                  >

                    <span className={styles.navlinksubText}>Sign In</span>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    className={`${styles.navLink} ${isActive("/logout") ? styles.active : ""
                      }`}
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                      // Optional: Redirect to signin page after logout
                      window.location.href = '/signin';
                    }}
                  >
                    <span className={styles.navlinksubText}>Log Out</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;