import React, { useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark((d) => !d);

  return (
    <div
      style={{
        marginTop: 20,
        padding: 10,
        background: dark ? "#222" : "#eee",
        color: dark ? "#fff" : "#222",
        borderRadius: 8,
      }}
    >
      <h3>Theme Switcher Example</h3>
      <button onClick={toggleTheme}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>
      <div style={{ marginTop: 10 }}>
        Current theme: <b>{dark ? "Dark" : "Light"}</b>
      </div>
    </div>
  );
}
