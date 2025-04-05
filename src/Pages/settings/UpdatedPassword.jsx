import { useState } from "react"
import styles from "./updatepassword.module.css"

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your password update logic here
    console.log("Password update submitted")
  }

  return (
    <div className={styles["update-password-container"]}>
      <h1 className={styles["update-password-title"]}>Update Password</h1>

      <form onSubmit={handleSubmit} className={styles["password-form"]}>
        <div className={styles["password-field"]}>
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
          />
        </div>

        <div className={styles["password-field"]}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
        </div>

        <div className={styles["password-field"]}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className={styles["confirm-button"]}>
          Confirm
        </button>
      </form>
    </div>
  )
}

export default UpdatePassword