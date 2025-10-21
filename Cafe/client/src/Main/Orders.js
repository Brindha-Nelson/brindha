import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Orders.css';

function Orders() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [currentOrder, setCurrentOrder] = useState(null);
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrders = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/orders/${user._id}`);
            if (response.data.orders) {
                // Sort orders by date, most recent first
                const sortedOrders = response.data.orders.sort((a, b) => 
                    new Date(b.createdAt) - new Date(a.createdAt)
                );
                
                // Find pending orders
                const pendingOrder = sortedOrders.find(order => order.status === 'pending');
                if (pendingOrder) {
                    setCurrentOrder(pendingOrder);
                    setOrderHistory(sortedOrders.filter(order => order !== pendingOrder));
                } else {
                    setCurrentOrder(null);
                    setOrderHistory(sortedOrders);
                }
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setError('Failed to load orders. Please try again later.');
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        let isMounted = true;

        const initializeOrders = async () => {
            if (!user) {
                navigate('/signin');
                return;
            }

            try {
                // Get current order from session storage
                const savedOrderDetails = sessionStorage.getItem('orderDetails');
                if (savedOrderDetails && isMounted) {
                    const parsedOrder = JSON.parse(savedOrderDetails);
                    setCurrentOrder(parsedOrder);
                }

                // Fetch all orders
                await fetchOrders();
            } catch (error) {
                if (isMounted) {
                    console.error('Error initializing orders:', error);
                    setError('Failed to load orders. Please try again later.');
                    setLoading(false);
                }
            }
        };

        initializeOrders();

        return () => {
            isMounted = false;
        };
    }, [navigate, user, fetchOrders]);

    const handleCancelOrder = async (orderId) => {
        try {
            // Update order status to cancelled instead of deleting
            await axios.patch(`http://localhost:5000/orders/${orderId}/status`, {
                status: 'cancelled'
            });
            // Clear from session storage if it's the current order
            sessionStorage.removeItem('orderDetails');
            // Update the current order state to null and move it to order history
            if (currentOrder && currentOrder._id === orderId) {
                const cancelledOrder = { ...currentOrder, status: 'cancelled' };
                setCurrentOrder(null);
                setOrderHistory(prev => [cancelledOrder, ...prev]);
            }
            alert('Order cancelled successfully');
        } catch (error) {
            console.error('Error cancelling order:', error);
            alert(error.response?.data?.error || 'Failed to cancel order');
        }
    };

    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    };

    const getStatusClass = (status) => {
        switch (status?.toLowerCase()) {
            case 'pending':
                return 'status-pending';
            case 'confirmed':
                return 'status-confirmed';
            case 'preparing':
                return 'status-preparing';
            case 'ready':
                return 'status-ready';
            case 'completed':
                return 'status-completed';
            case 'cancelled':
                return 'status-cancelled';
            default:
                return 'status-pending';
        }
    };

    if (!user) {
        return (
            <div className="orders-container">
                <h2>Please log in to view orders</h2>
                <button onClick={() => navigate('/signin')}>Go to Login</button>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="orders-container">
                <h2>Loading orders...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="orders-container">
                <h2>Error</h2>
                <p className="error-message">{error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }

    return (
        <div className="orders-container">
            <h1>Your Orders</h1>

            {currentOrder && (
                <div className="current-order">
                    <h2>Current Order</h2>
                    <div className="order-card">
                        <div className="order-header">
                            <div className="order-header-left">
                                <p className="order-date">
                                    {currentOrder.createdAt ? 
                                        `Ordered on: ${formatDate(currentOrder.createdAt)}` : 
                                        'Processing Order...'}
                                </p>
                                <p className={`order-status ${getStatusClass(currentOrder.status)}`}>
                                    Status: {currentOrder.status || 'Processing'}
                                </p>
                            </div>
                            {currentOrder.status === 'pending' && (
                                <button 
                                    className="cancel-button"
                                    onClick={() => handleCancelOrder(currentOrder._id)}
                                >
                                    Cancel Order
                                </button>
                            )}
                        </div>
                        <div className="order-items">
                            {currentOrder.items?.map((item, index) => (
                                <div key={index} className="order-item">
                                    <img src={item.image} alt={item.title} />
                                    <div className="item-details">
                                        <h3>{item.title}</h3>
                                        <p className="item-price">{item.price}</p>
                                        <p className="item-quantity">Quantity: {item.quantity}</p>
                                        <p className="item-total">Total: ₹{item.total}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-footer">
                            {currentOrder.deliveryAddress && (
                                <div className="delivery-address">
                                    <h4>Delivery Address:</h4>
                                    <p>{currentOrder.deliveryAddress.street}</p>
                                    <p>{currentOrder.deliveryAddress.city}, {currentOrder.deliveryAddress.state}</p>
                                    <p>PIN: {currentOrder.deliveryAddress.pinCode}</p>
                                </div>
                            )}
                            <div className="order-total">
                                <h3>Total Amount: ₹{currentOrder.totalAmount}</h3>
                                {currentOrder.paymentMethod && (
                                    <p>Payment Method: {currentOrder.paymentMethod}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="order-history">
                <h2>Order History</h2>
                {!orderHistory || orderHistory.length === 0 ? (
                    <p className="no-orders">No previous orders found</p>
                ) : (
                    orderHistory.map((order, index) => (
                        <div key={index} className="order-card">
                            <div className="order-header">
                                <div className="order-header-left">
                                    <p className="order-date">Ordered on: {formatDate(order.createdAt)}</p>
                                    <p className={`order-status ${getStatusClass(order.status)}`}>
                                        Status: {order.status}
                                    </p>
                                </div>
                            </div>
                            <div className="order-items">
                                {order.items?.map((item, itemIndex) => (
                                    <div key={itemIndex} className="order-item">
                                        <img src={item.image} alt={item.title} />
                                        <div className="item-details">
                                            <h3>{item.title}</h3>
                                            <p className="item-price">{item.price}</p>
                                            <p className="item-quantity">Quantity: {item.quantity}</p>
                                            <p className="item-total">Total: ₹{item.total}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="order-footer">
                                <div className="delivery-address">
                                    <h4>Delivery Address:</h4>
                                    <p>{order.deliveryAddress?.street}</p>
                                    <p>{order.deliveryAddress?.city}, {order.deliveryAddress?.state}</p>
                                    <p>PIN: {order.deliveryAddress?.pinCode}</p>
                                </div>
                                <div className="order-total">
                                    <h3>Total Amount: ₹{order.totalAmount}</h3>
                                    <p>Payment Method: {order.paymentMethod}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Orders; 