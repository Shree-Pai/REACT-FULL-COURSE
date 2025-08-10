import React from 'react';

const layoutStyle = {
  maxWidth: 500,
  margin: 'auto',
  padding: 20,
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9f9f9',
  borderRadius: 6,
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
};

export default function Layout({ children }) {
  return <div style={layoutStyle}>{children}</div>;
}
