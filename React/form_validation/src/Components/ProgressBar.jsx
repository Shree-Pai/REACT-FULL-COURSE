// src/Components/ProgressBar.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const steps = [
  { path: '/personal', label: 'Personal' },
  { path: '/job', label: 'Job' },
  { path: '/bank', label: 'Bank' },
  { path: '/emergency', label: 'Emergency' },
  { path: '/documents', label: 'Documents' },
  { path: '/review', label: 'Review' },
];

const ProgressBar = () => {
  const location = useLocation();
  const currentIndex = steps.findIndex((step) => step.path === location.pathname);
  const percentage = (currentIndex / (steps.length - 1)) * 100;

  return (
    <div style={{ maxWidth: 800, margin: '30px auto', padding: '0 20px' }}>
      <div style={{ position: 'relative', height: 4, background: '#e0e0e0', borderRadius: 2 }}>
        <div
          style={{
            position: 'absolute',
            height: 4,
            background: '#4caf50',
            width: `${percentage}%`,
            borderRadius: 2,
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
        {steps.map((step, index) => (
          <div
            key={step.path}
            style={{
              textAlign: 'center',
              color: index === currentIndex ? '#4caf50' : '#777',
              fontWeight: index === currentIndex ? 'bold' : 'normal',
              fontSize: 13,
              width: `${100 / steps.length}%`,
            }}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
