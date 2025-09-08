import React, { useState } from "react";
import ResumeUploader from "./components/ResumeUploader";
import PastResumesTable from "./components/PastResumesTable";

function App() {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>📄 Resume Analyzer</h1>

      {/* Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("upload")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: activeTab === "upload" ? "#007bff" : "#e0e0e0",
            color: activeTab === "upload" ? "white" : "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload Resume
        </button>
        <button
          onClick={() => setActiveTab("history")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeTab === "history" ? "#007bff" : "#e0e0e0",
            color: activeTab === "history" ? "white" : "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          History
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "upload" ? <ResumeUploader /> : <PastResumesTable />}
    </div>
  );
}

export default App;
