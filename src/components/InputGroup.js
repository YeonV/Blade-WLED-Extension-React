import React from 'react';

export default function InputGroup({ label, children }) {
  return (
    <div className="settings-row-group floating">
      <label className="floating">{label}</label>
      {children}
    </div>
  );
}
