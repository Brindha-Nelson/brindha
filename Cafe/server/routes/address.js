const express = require('express');
const router = express.Router();
const Address = require('../models/Address');
const auth = require('../middleware/auth');

router.get('/:userId', auth, async (req, res) => {
    try {
        let userAddresses = await Address.findOne({ userId: req.params.userId });
        if (!userAddresses) {
            userAddresses = { addresses: [] };
        }
        res.json(userAddresses);
    } catch (error) {
        console.error('Error fetching addresses:', error);
        res.status(500).json({ error: 'Error retrieving addresses' });
    }
});

router.post('/:userId', auth, async (req, res) => {
    try {
        const { street, city, state, pinCode } = req.body;
        let userAddresses = await Address.findOne({ userId: req.params.userId });

        if (!userAddresses) {
            userAddresses = new Address({
                userId: req.params.userId,
                addresses: []
            });
        }

        userAddresses.addresses.push({ street, city, state, pinCode });
        await userAddresses.save();

        res.status(201).json(userAddresses);
    } catch (error) {
        console.error('Error saving address:', error);
        res.status(500).json({ error: 'Error saving address' });
    }
});

router.delete('/:userId/:addressId', auth, async (req, res) => {
    try {
        const userAddresses = await Address.findOne({ userId: req.params.userId });
        if (!userAddresses) {
            return res.status(404).json({ error: 'No addresses found' });
        }

        userAddresses.addresses = userAddresses.addresses.filter(
            (_, index) => index.toString() !== req.params.addressId
        );
        await userAddresses.save();

        res.json(userAddresses);
    } catch (error) {
        console.error('Error deleting address:', error);
        res.status(500).json({ error: 'Error deleting address' });
    }
});

module.exports = router; 