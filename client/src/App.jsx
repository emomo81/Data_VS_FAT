import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    // Determine backend URL
    // In production (Vercel), set VITE_BACKEND_URL environment variable 
    // to your Render backend URL (e.g., https://my-backend.onrender.com)
    // Locally, it defaults to http://localhost:3000
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

    fetch(`${backendUrl}/api/hello`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error(err);
        setMessage('Error connecting to backend');
      });
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Frontend (Vercel)</h1>
      <p>Message from Backend (Render):</p>
      <h2 style={{ color: 'blue' }}>{message}</h2>
    </div>
  )
}

export default App
