import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Cart.css';



function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({});
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemTitle, change) => {
    setQuantities(prev => {
      const currentQty = prev[itemTitle] || 0;
      const newQty = Math.max(0, currentQty + change);
      
      if (newQty === 0) {
        setSelectedItems(prevSelected => {
          const newSelected = { ...prevSelected };
          delete newSelected[itemTitle];
          return newSelected;
        });
      }
      
      return {
        ...prev,
        [itemTitle]: newQty
      };
    });
  };

  const toggleItemSelection = (itemTitle) => {
    setSelectedItems(prev => {
      const newSelected = { ...prev };
      if (newSelected[itemTitle]) {
        delete newSelected[itemTitle];
        setQuantities(prevQty => {
          const newQty = { ...prevQty };
          delete newQty[itemTitle];
          return newQty;
        });
      } else {
        newSelected[itemTitle] = true;
        setQuantities(prevQty => ({
          ...prevQty,
          [itemTitle]: 1
        }));
      }
      return newSelected;
    });
  };

  const calculateItemTotal = (item) => {
    const price = parseFloat(item.price.replace('₹', ''));
    return price * (quantities[item.title] || 0);
  };

  const totalAmount = cartItems.reduce((total, item) => {
    if (selectedItems[item.title]) {
      return total + calculateItemTotal(item);
    }
    return total;
  }, 0);

  const getSelectedItemsDetails = () => {
    return cartItems.filter(item => selectedItems[item.title] && quantities[item.title] > 0);
  };

  const handleProceedToOrder = () => {
    if (!isAuthenticated) {
      alert('Please sign in to proceed with order');
      navigate('/signin');
      return;
    }

    const selectedItemsDetails = getSelectedItemsDetails();
    if (selectedItemsDetails.length === 0) {
      alert('Please select items and set quantities to proceed');
      return;
    }

    // Prepare order details
    const orderDetails = {
      items: selectedItemsDetails.map(item => ({
        ...item,
        quantity: quantities[item.title],
        total: calculateItemTotal(item)
      })),
      totalAmount: totalAmount
    };

    sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/Home')}>Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-header">
            <h2>Select Items to Order ({cartItems.length} items available)</h2>
            {getSelectedItemsDetails().length > 0 && (
              <button 
                className="proceed-button"
                onClick={handleProceedToOrder}
              >
                Proceed to Order (₹{totalAmount})
              </button>
            )}
          </div>
          
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className={`cart-item ${selectedItems[item.title] ? 'selected' : ''}`}>
                <div className="item-select">
                  <input
                    type="checkbox"
                    checked={!!selectedItems[item.title]}
                    onChange={() => toggleItemSelection(item.title)}
                  />
                </div>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="cart-item-price">{item.price}</p>
                  {selectedItems[item.title] && (
                    <>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.title, -1)}
                        >
                          -
                        </button>
                        <span className="quantity">{quantities[item.title] || 0}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.title, 1)}
                        >
                          +
                        </button>
                      </div>
                      <p className="item-total">Total: ₹{calculateItemTotal(item)}</p>
                    </>
                  )}
                </div>
                <button 
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          {getSelectedItemsDetails().length > 0 && (
            <div className="cart-summary">
              <div className="selected-items">
                <h3>Selected Items</h3>
                {getSelectedItemsDetails().map((item, index) => (
                  <div key={index} className="selected-item">
                    <span>{item.title} x {quantities[item.title]}</span>
                    <span>₹{calculateItemTotal(item)}</span>
                  </div>
                ))}
              </div>
              <div className="total-amount">
                <h3>Total Amount: ₹{totalAmount}</h3>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;