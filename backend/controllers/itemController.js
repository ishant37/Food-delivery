import Item from '../models/Item.js';

export const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

export const createItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
};

export const updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

export const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
