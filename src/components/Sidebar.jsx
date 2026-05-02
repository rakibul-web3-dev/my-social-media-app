import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <p>Profile</p>
      <p>Friends</p>
      <p>Groups</p>
    </div>
  );
}

export default Sidebar;
