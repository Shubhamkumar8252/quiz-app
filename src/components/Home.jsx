import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f4f8',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to the Quiz App</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Test your knowledge with a fun and interactive quiz!
      </p>
      <Link to="/quiz" style={{
        padding: '12px 24px',
        fontSize: '1.1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        borderRadius: '6px',
        textDecoration: 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        Start Quiz
      </Link>
    </div>
  );
}

export default Home;
