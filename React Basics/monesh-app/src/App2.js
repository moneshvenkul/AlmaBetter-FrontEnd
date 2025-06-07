import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams  } from 'react-router-dom';
import "./App.css"

function App2() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
        <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouts" element={<About />} >
          <Route path=":about" element={<Contact />} />
        </Route>
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  const { about } = useParams();
  return <div>User ID: {about}</div>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default App2;
