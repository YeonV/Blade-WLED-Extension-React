import React from 'react';

export default function ToggleText({ value, onChange, active, onToggle }) {
  return (
    <>
      <i
        className={`${active ? 'active' : ''} fa-fw fas fa-palette`}
        style={{ marginRight: '0.5rem' }}
        onClick={onToggle}
      ></i>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
}
