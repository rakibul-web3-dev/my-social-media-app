import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = true;

    if (isValid) {
      navigate("/home");
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
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Enter password"
            className={styles.input}
            autoComplete="current-password"
          />
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
