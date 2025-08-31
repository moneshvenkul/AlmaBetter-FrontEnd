import React, { useState } from "react";

const options = ["React", "Vue", "Angular", "Svelte"];

export default function DropdownSelect() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Dropdown Select Example</h3>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div style={{ marginTop: 10 }}>
        Selected: <b>{selected}</b>
      </div>
    </div>
  );
}
