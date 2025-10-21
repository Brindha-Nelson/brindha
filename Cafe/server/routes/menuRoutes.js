const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

router.post("/", async (req, res) => {
  const { name, category, description, price, imageUrl } = req.body;

  try {
    const newItem = new MenuItem({ name, category, description, price, imageUrl });
    await newItem.save();
    res.json({ message: "Menu item added", item: newItem });
  } catch (err) {
    res.status(500).json({ error: "Failed to add menu item" });
  }
});

module.exports = router;
