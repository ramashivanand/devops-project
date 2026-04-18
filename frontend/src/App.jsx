import { useState, useEffect } from "react";
export default function App() {
  const [projects, setProjects] = useState([]);
  const [health, setHealth] = useState(null);
  useEffect(() => {
    fetch("/api/projects").then(r => r.json()).then(setProjects).catch(console.error);
    fetch("/health").then(r => r.json()).then(setHealth).catch(console.error);
  }, []);
  return (
    <div style={{ fontFamily: "monospace", background: "#0d1117", minHeight: "100vh", color: "#c9d1d9", padding: "40px" }}>
      <h1 style={{ color: "#00e5a0" }}>DevOps Dashboard</h1>
      <p style={{ color: "#484f58", marginBottom: "30px" }}>CI/CD Pipeline Project</p>
      <div style={{ background: "#161b22", border: "1px solid #21262d", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <h2 style={{ color: "#8b949e", fontSize: "14px", marginBottom: "12px" }}>BACKEND HEALTH</h2>
        {health ? <p>Status: <strong style={{ color: "#00e5a0" }}>OK {health.status}</strong></p> : <p style={{ color: "#484f58" }}>Connecting...</p>}
      </div>
      <div style={{ background: "#161b22", border: "1px solid #21262d", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ color: "#8b949e", fontSize: "14px", marginBottom: "12px" }}>PROJECTS</h2>
        {projects.map(p => (
          <div key={p.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #21262d" }}>
            <span>{p.name}</span>
            <span style={{ color: p.status === "active" ? "#00e5a0" : "#8b949e" }}>{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
