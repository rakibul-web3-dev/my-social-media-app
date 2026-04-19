function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#1877f2",
        color: "white",
      }}
    >
      <h2>RimJhim</h2>
      <input placeholder="Search..." />
      <div>Profile</div>
    </div>
  );
}

export default Navbar;
