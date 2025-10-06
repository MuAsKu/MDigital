import Logout from "./logout.svg";

export default function Button() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Logout />
      <button
        style={{
          color: "#EB3B5A",
          fontSize: "16px",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}
