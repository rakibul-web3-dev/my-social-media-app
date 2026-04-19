import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    const success = true;
    if (success) {
      navigate("/home");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formControl}>
        <h2 className={styles.title}>Create Account</h2>
        <form className={styles.form}>
          {/* Name */}
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          {/* Phone Number */}
          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter your number" />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <label className="form-label">Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          {/* Button */}
          <button
            type="submit"
            className={styles.submitBtn}
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
