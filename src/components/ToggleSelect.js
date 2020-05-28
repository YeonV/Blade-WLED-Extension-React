import React from 'react';

export default function ToggleSelect({
  icon,
  value,
  onChange,
  active,
  onToggle,
  labels
}) {
  return (
    <>
      <i
        className={`${active ? 'active' : ''} fa-fw ${icon}`}
        style={{ marginRight: '0.5rem' }}
        onClick={onToggle}
      ></i>
      <select onChange={onChange} value={value} >
        {labels.map((ele, i) => (
          <option key={i} onChange={() => {}} value={i}>
            {ele}
          </option>
        ))}
      </select>
    </>
  );
}
