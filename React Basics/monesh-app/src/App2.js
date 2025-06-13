import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet  } from 'react-router-dom';
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
        <Route path="/about" element={<About />} >
          <Route index element={<Contact />} />
          <Route path="login" element={<Login />} />
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
  return <><div>About</div><Outlet /></>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}

export default App2;
