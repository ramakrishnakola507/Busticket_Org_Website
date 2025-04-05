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

          {/* Organization Dropdown */}
          <li className={styles.navItem} onClick={() => setIsOrgOpen(!isOrgOpen)}>
            <a className={styles.navLink} style={{ justifyContent: "space-between" }}>
              <div className="flex gap-3 items-center">
                <CgOrganisation />
                <span className={styles.navLinkText}>Organization</span>
              </div>

              <FaChevronDown
                className={`${styles.mlAuto} ${styles.transitionTransform} ${isOrgOpen ? styles.rotate180 : styles.rotate0
                  }`}

              />
            </a>

            {isOrgOpen && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/view-orgnization") ? styles.active : ""
                      }`}
                    to="/view-orgnization"
                  >

                    <span className={styles.navlinksubText}>View Organizations</span>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/create-organization") ? styles.active : ""
                      }`}
                    to="/create-organization"
                  >

                    <span className={styles.navlinksubText}>Create Organization</span>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/create-god") ? styles.active : ""
                      }`}
                    to="/create-god"
                  >

                    <span className={styles.navlinksubText}>Create Goduser</span>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/view-godusers") ? styles.active : ""
                      }`}
                    to="/view-godusers"
                  >

                    <span className={styles.navlinksubText}>View All Godusers</span>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/create-superadmin") ? styles.active : ""
                      }`}
                    to="/create-superadmin"
                  >

                    <span className={styles.navlinksubText}>Create Super Admins</span>
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/view-users") ? styles.active : ""
                      }`}
                    to="/view-users"
                  >

                    <span className={styles.navlinksubText}>View All Users</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Logs Dropdown */}
          <li className={styles.navItem} onClick={() => setIsLogsOpen(!isLogsOpen)}>
            <a href="#" className={styles.navLink} style={{ justifyContent: "space-between" }}>
              <div className="flex gap-3 items-center">
                <IoStatsChart />
                <span className={styles.navLinkText}>Logs</span>
              </div>
              <FaChevronDown
                className={`${styles.mlAuto} ${styles.transitionTransform} ${isLogsOpen ? styles.rotate180 : styles.rotate0
                  }`}
              />
            </a>

            {isLogsOpen && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className={`${styles.navLink} ${isActive("/view-logs") ? styles.active : ""
                      }`}
                    to="/view-logs"
                  >

                    <span className={styles.navlinksubText}>View Logs</span>
                  </Link>
                </li>
              </ul>
            )}
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