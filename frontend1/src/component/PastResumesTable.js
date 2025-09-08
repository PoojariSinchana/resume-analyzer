import React from 'react';

export default function PastResumesTable({ resumes, onSelect }) {
  return (
    <table>
      <thead>
        <tr>
          <th>File</th>
          <th>Name</th>
          <th>Email</th>
          <th>Uploaded</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {resumes.map(r => (
          <tr key={r.id}>
            <td>{r.file_name}</td>
            <td>{r.name}</td>
            <td>{r.email}</td>
            <td>{new Date(r.uploaded_at).toLocaleString()}</td>
            <td><button onClick={() => onSelect(r)}>Details</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
