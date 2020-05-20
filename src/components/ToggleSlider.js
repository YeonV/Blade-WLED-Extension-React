import React from 'react';

export default function ToggleSlider({
  icon,
  value = 128,
  onChange,
  active,
  onToggle,
  min = 0,
  max = 255,
}) {
  return (
    <>
      <i
        className={`${active ? 'active' : ''} fa-fw ${icon}`}
        style={{ marginRight: '0.5rem' }}
        onClick={onToggle}
      ></i>
      <input
        className="brightStart"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
