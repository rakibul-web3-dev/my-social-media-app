import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <h2>RimJhim</h2>
        <input placeholder="Search Facebook" />
      </div>
      <div className={styles.navbarMiddle}>
        <i className="bi bi-house"></i>
        <i className="bi bi-camera-reels"></i>
        <i className="bi bi-shop"></i>
        <i className="bi bi-people"></i>
      </div>
      <div className={styles.navbarRight}>
        <i className="bi bi-menu-up"></i>
        <i className="bi bi-messenger"></i>
        <i className="bi bi-bell"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
}

export default Navbar;
