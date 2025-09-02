import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) onLogin();
    else setError('Invalid credentials');
  };

  return (
    <form onSubmit={handleLogin} style={{maxWidth:400,margin:'40px auto',padding:24,border:'1px solid #ccc',borderRadius:8}}>
      <h2>Admin Login</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} style={{width:'100%',marginBottom:8}} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{width:'100%',marginBottom:8}} />
      <button type="submit" style={{width:'100%'}}>Login</button>
      {error && <div style={{color:'red'}}>{error}</div>}
    </form>
  );
};

export default AdminLogin;
