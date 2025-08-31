import React, { useState } from "react";

export default function ModalExample() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Modal Popup Example</h3>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 30,
              borderRadius: 8,
              minWidth: 250,
              textAlign: "center",
            }}
          >
            <h4>This is a Modal!</h4>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
