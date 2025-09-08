import React from 'react';

export default function ResumeDetails({ data }) {
  if (!data) return null;
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Summary: {data.summary}</p>
      <p>Rating: {data.resume_rating}/10</p>
      <h3>Improvement Areas</h3>
      <p>{data.improvement_areas}</p>
    </div>
  );
}
