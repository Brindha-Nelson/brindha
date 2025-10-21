import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Checkout.css';

function Checkout() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [orderDetails, setOrderDetails] = useState(null);
    const [deliveryAddress, setDeliveryAddress] = useState({
        street: '',
        city: '',
        state: '',
        pinCode: ''
    });
    const [savedAddresses, setSavedAddresses] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const fetchSavedAddresses = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/address/${user._id}`);
            setSavedAddresses(response.data.addresses || []);
        } catch (error) {
            console.error('Error fetching addresses:', error);
        }
    }, [user]);

    useEffect(() => {
        const savedOrderDetails = sessionStorage.getItem('orderDetails');
        if (savedOrderDetails) {
            setOrderDetails(JSON.parse(savedOrderDetails));
        } else {
            navigate('/cart');
        }

        if (user) {
            fetchSavedAddresses();
        }
    }, [navigate, user, fetchSavedAddresses]);

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setDeliveryAddress(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveAddress = async () => {
        try {
            await axios.post(`http://localhost:5000/address/${user._id}`, deliveryAddress);
            alert('Address saved successfully!');
            fetchSavedAddresses();
        } catch (error) {
            alert('Error saving address');
        }
    };

    const handleDeleteAddress = async (addressId) => {
        try {
            await axios.delete(`http://localhost:5000/address/${user._id}/${addressId}`);
            alert('Address deleted successfully!');
            fetchSavedAddresses();
        } catch (error) {
            alert('Error deleting address');
        }
    };

    const handleSelectAddress = (address) => {
        setDeliveryAddress(address);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!orderDetails) return;

        try {
            const response = await axios.post(`http://localhost:5000/orders/${user._id}`, {
                items: orderDetails.items,
                totalAmount: orderDetails.totalAmount,
                deliveryAddress,
                paymentMethod
            });
            
            if (response.data.order) {
                sessionStorage.removeItem('orderDetails');
                alert('Order placed successfully!');
                window.scrollTo(0, 0);
                navigate('/home');
            }
        } catch (error) {
            alert(error.response?.data?.error || 'Error placing order');
        }
    };

    if (!user) {
        return (
            <div className="checkout-container">
                <h2>Please log in to place an order</h2>
                <button onClick={() => navigate('/signin')}>Go to Login</button>
            </div>
        );
    }

    if (!orderDetails || orderDetails.items.length === 0) {
        return (
            <div className="checkout-container">
                <h2>No items selected for order</h2>
                <button onClick={() => navigate('/cart')}>Return to Cart</button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            
            <div className="order-summary">
                <h3>Order Summary</h3>
                {orderDetails.items.map((item, index) => (
                    <div key={index} className="checkout-item">
                        <img src={item.image} alt={item.title} />
                        <div className="item-details">
                            <h4>{item.title}</h4>
                            <p className="item-price">{item.price}</p>
                            <p className="item-quantity">Quantity: {item.quantity}</p>
                            <p className="item-total">Total: ₹{item.total}</p>
                        </div>
                    </div>
                ))}
                <div className="total">
                    <h3>Total Amount: ₹{orderDetails.totalAmount}</h3>
                </div>
            </div>

            <div className="address-section">
                <h3>Delivery Address</h3>
                
                {savedAddresses.length > 0 && (
                    <div className="saved-addresses">
                        <h4>Your Saved Addresses</h4>
                        {savedAddresses.map((address, index) => (
                            <div key={index} className="saved-address-card">
                                <div className="address-details">
                                    <p>{address.street}</p>
                                    <p>{address.city}, {address.state}</p>
                                    <p>PIN: {address.pinCode}</p>
                                </div>
                                <div className="address-actions">
                                    <button 
                                        className="select-address-btn"
                                        onClick={() => handleSelectAddress(address)}
                                    >
                                        Use This Address
                                    </button>
                                    <button 
                                        className="delete-address-btn"
                                        onClick={() => handleDeleteAddress(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <form className="checkout-form">
                    <input
                        type="text"
                        name="street"
                        placeholder="Street Address"
                        value={deliveryAddress.street}
                        onChange={handleAddressChange}
                        required
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={deliveryAddress.city}
                        onChange={handleAddressChange}
                        required
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={deliveryAddress.state}
                        onChange={handleAddressChange}
                        required
                    />
                    <input
                        type="text"
                        name="pinCode"
                        placeholder="PIN Code"
                        value={deliveryAddress.pinCode}
                        onChange={handleAddressChange}
                        required
                    />
                    <button 
                        type="button" 
                        className="save-address-btn"
                        onClick={handleSaveAddress}
                    >
                        Save This Address
                    </button>
                </form>
            </div>

            <div className="payment-section">
                <h3>Payment Method</h3>
                <form className="checkout-form">
                    <select
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                        className="payment-select"
                    >
                        <option value="" disabled>Select Payment Method</option>
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="upi">UPI</option>
                    </select>
                    <button type="submit" className="place-order-btn" onClick={handleSubmit}>
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout; 