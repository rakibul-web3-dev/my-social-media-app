import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();

  //State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !password) {
      alert("Please fill all fields!");
      return;
    }
    const user = {
      name,
      phone,
      email,
      password,
    };
    //Save to Local Storage
    localStorage.setItem("user", JSON.stringify(user));

    //Redirect
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formControl}>
        <h2 className={styles.title}>Create Account</h2>
        <form className={styles.form} onSubmit={handleSignUp}>
          {/* Name */}
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div className={styles.inputGroup}>
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className={styles.submitBtn}
            // onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
