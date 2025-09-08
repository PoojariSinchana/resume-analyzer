import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResumeUploader from './components/ResumeUploader';
import ResumeDetails from './components/ResumeDetails';
import PastResumesTable from './components/PastResumesTable';

export default function App() {
  const [tab, setTab] = useState(1);
  const [resumes, setResumes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/resumes")
      .then(res => setResumes(res.data));
  }, []);

  return (
    <div>
      <button onClick={() => setTab(1)}>Upload & Analyze</button>
      <button onClick={() => setTab(2)}>History</button>

      {tab === 1 && (
        <div>
          <ResumeUploader onUpload={setSelected} />
          <ResumeDetails data={selected} />
        </div>
      )}

      {tab === 2 && (
        <PastResumesTable resumes={resumes} onSelect={setSelected} />
      )}
    </div>
  );
}
