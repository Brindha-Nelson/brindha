import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated && user) {
            loadCartFromDB();
        } else {
            setCartItems([]);
        }
    }, [isAuthenticated, user]);

    const loadCartFromDB = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/cart/${user._id}`);
            setCartItems(response.data.items || []);
        } catch (error) {
            console.error('Error loading cart:', error);
        }
    };

    const saveCartToDB = async (updatedItems) => {
        if (!isAuthenticated || !user) return;

        try {
            await axios.post(`http://localhost:5000/cart/${user._id}`, {
                items: updatedItems
            });
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    };

    const addToCart = async (item) => {
        if (!isAuthenticated) {
            alert('Please sign in to add items to cart');
            return false;
        }

        const existingItemIndex = cartItems.findIndex(
            cartItem => cartItem.title === item.title
        );

        let updatedItems;
        if (existingItemIndex >= 0) {
            updatedItems = cartItems.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return {
                        ...cartItem,
                        quantity: (cartItem.quantity || 1) + 1
                    };
                }
                return cartItem;
            });
        } else {
            updatedItems = [...cartItems, { ...item, quantity: 1 }];
        }

        setCartItems(updatedItems);
        await saveCartToDB(updatedItems);
        return true;
    };

    const removeFromCart = async (index) => {
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
        await saveCartToDB(updatedItems);
    };

    const updateQuantity = async (index, change) => {
        const updatedItems = cartItems.map((item, i) => {
            if (i === index) {
                const newQuantity = (item.quantity || 1) + change;
                if (newQuantity < 1) return null;
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(Boolean);

        setCartItems(updatedItems);
        await saveCartToDB(updatedItems);
    };

    const clearCart = async () => {
        setCartItems([]);
        if (isAuthenticated && user) {
            await saveCartToDB([]);
        }
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
} 