import React, { useEffect, useState } from 'react';

const API = 'http://localhost:4000/admin/items';

const AdminDashboard = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '', category: '', description: '' });
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch(API).then(res => res.json()).then(setItems);
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setFile(e.target.files[0]);

  const handleCreate = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    if (file) data.append('image', file);
    const res = await fetch(API, {
      method: 'POST',
      body: data,
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setForm({ name: '', price: '', image: '', category: '', description: '' });
    setFile(null);
  };

  const handleDelete = async id => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    setItems(items.filter(i => i._id !== id));
  };

  return (
    <div style={{maxWidth:700,margin:'40px auto'}}>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleCreate} style={{marginBottom:24}}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleFile} />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item._id} style={{marginBottom:16,border:'1px solid #eee',padding:8}}>
            <img src={item.image.startsWith('/uploads/') ? `http://localhost:4000${item.image}` : item.image} alt={item.name} width={50} />
            <b>{item.name}</b> ₹{item.price} [{item.category}]
            <button onClick={() => handleDelete(item._id)} style={{marginLeft:8}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
