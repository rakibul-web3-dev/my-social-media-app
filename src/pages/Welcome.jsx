import { useState } from "react";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Please sign up first");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to RimJhim</h1>
        <p className={styles.text}>
          A social media app that helps you connect with your friends.
        </p>

        {/*Login Form*/}
        <form className={styles.form} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <div className={styles.passwordBox}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className={styles.inputPass}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.toggleBtn}
            >
              {showPassword ? (
                <i class="bi bi-eye-slash"></i>
              ) : (
                <i class="bi bi-eye"></i>
              )}
            </button>
          </div>
          <button type="submit" className={`btn btn-primary ${styles.button}`}>
            Login
          </button>
        </form>
        <div className={styles.centre}>
          <button
            type="button"
            className={`btn btn-primary ${styles.button}`}
            onClick={() => navigate("/signup")}
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
