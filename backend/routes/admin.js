import express from 'express';
import Item from '../models/Item.js';
import Admin from '../models/Admin.js';
import upload from '../middleware/upload.js';
import path from 'path';

const router = express.Router();

// Admin login (simple, no JWT for demo)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) res.json({ success: true });
  else res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Get all items
router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Create item with image upload
router.post('/items', upload.single('image'), async (req, res) => {
  const { name, price, category, description } = req.body;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }
  const item = new Item({ name, price, category, description, image: imageUrl });
  await item.save();
  res.json(item);
});

// Update item (with optional image upload)
router.put('/items/:id', upload.single('image'), async (req, res) => {
  const { name, price, category, description } = req.body;
  let imageUrl = req.body.image;
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }
  const item = await Item.findByIdAndUpdate(
    req.params.id,
    { name, price, category, description, image: imageUrl },
    { new: true }
  );
  res.json(item);
});

// Delete item
router.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
