import React, { useState } from "react";

export default function JokeFetcher() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    setJoke(null);
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (err) {
      setError("Could not fetch joke.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>API Fetch Example (Random Joke)</h3>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? "Loading..." : "Get Joke"}
      </button>
      {joke && <div style={{ marginTop: 10 }}>{joke}</div>}
      {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
    </div>
  );
}
