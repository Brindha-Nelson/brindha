const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');

router.get('/:userId', auth, async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.params.userId });
        
        // If no cart exists, create an empty one
        if (!cart) {
            cart = new Cart({ userId: req.params.userId, items: [] });
            await cart.save();
        }
        
        res.json({ items: cart.items });
    } catch (error) {
        console.error('Error getting cart:', error);
        res.status(500).json({ error: 'Error retrieving cart' });
    }
});

router.post('/:userId', auth, async (req, res) => {
    try {
        const { items } = req.body;
        
        let cart = await Cart.findOne({ userId: req.params.userId });
        
        if (!cart) {
            cart = new Cart({ userId: req.params.userId, items: [] });
        }
        
        cart.items = items;
        await cart.save();
        
        res.json({ items: cart.items });
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({ error: 'Error updating cart' });
    }
});

router.delete('/:userId/remove/:index', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        cart.items.splice(req.params.index, 1);
        await cart.save();
        res.json({ items: cart.items });
    } catch (error) {
        console.error('Error removing from cart:', error);
        res.status(500).json({ error: 'Error removing item from cart' });
    }
});

router.delete('/:userId/clear', auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        
        cart.items = [];
        await cart.save();
        
        res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        console.error('Error clearing cart:', error);
        res.status(500).json({ error: 'Error clearing cart' });
    }
});

module.exports = router; 