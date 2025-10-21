import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import coffeeShopImage from "./Image/coffee_shop_with_warm_atmosphere_copy.jpeg";
import "./Homepage.css";
import "./Colddrinks.css";
import { useAuth } from "../context/AuthContext";

  const menuPreviews = {
    Hotdrinks: [{ 
      name: "Cappuccino",
      desc: "Rich espresso with creamy steamed milk and airy foam.",
      price: "₹130", 
      img: "/Hot_Drinks/cappuccino.jpeg" 
    },
    {      
      name: "Eggnog Latte",
      desc: "Bold espresso meets classic eggnog for a festive, creamy treat.",
      price: "₹150", 
      img: "/Hot_Drinks/Eggnog Latte.jpeg" 
  },
  {      
    name: "Rooibos",
    desc: "A gentle, soothing red tea with naturally sweet and nutty undertones.",
    price: "₹100", 
    img: "/Hot_Drinks/Rooibos.jpeg" 
  }],
  Colddrinks: [{ 
    name: "Milkshake",
    desc: "A creamy blend of milk and ice cream, whipped to smooth perfection.",
    price: "₹120", 
    img: "/cold_drinks/Strawberry Milkshake.jpeg" 
  },
  {      
    name: "Fresh Juice",
    desc: "Pure, cold-pressed juice made fresh from seasonal fruits.",
    price: "₹90", 
    img: "/cold_drinks/watermelon juice.jpeg" 
  },
  {      
    name: "Smoothie",
    desc: "A chilled blend of fresh fruits and creamy yogurt — naturally sweet and energizing.",
    price: "₹130", 
    img: "/cold_drinks/Raspberry Peach Smoothie.jpeg" 
  }],
  Desserts: [
    {
      name: "Strawberry Cake",
      desc: "Soft, fluffy cake layered with fresh strawberries and whipped cream.",
      price: "₹180", 
      img: "/Pastries/strawberry cake.jpeg" 
    },
    {
      name: "Lemon Cookies",
      desc: "Buttery cookies with a burst of citrus and smooth lemony cream fresh and flavorful.",
      price: "₹85", 
      img: "/Pastries/Lemon Cookies with Lemon Cream.jpeg" 
    },
    {
      name: "Cheese Croissant",
      desc: "Creamy cheesecake infused with delicate lavender and sweetened with golden honey.",
      price: "₹140", 
      img: "/Pastries/Buttery Ham and Cheese Croissant.jpeg" 
    }
  ],
  Meals: [
    {
      name: "Pancake",
      desc: "Fluffy, golden pancakes served warm with butter and maple syrup.",
      price: "₹160", 
      img: "/Pastries/japanese Pancakes.jpeg" 
    },
    {
      name: "Omurice",
      desc: "Fluffy omelette wrapped around seasoned fried rice, topped with savory ketchup or demi-glace sauce.",
      price: "₹180", 
      img: "/Light_Meals/OMURICE.jpeg" 
    },
    {
      name: "Sandwich",
      desc: "Fresh ingredients between artisanal bread slices, perfect for a light, satisfying meal.",
      price: "₹120", 
      img: "/Light_Meals/sandwich.jpeg" 
    }
  ]
};

const sectionDividerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '40px 0'
};

const gradientLineStyle = (direction) => ({
  flex: 1,
  height: '2px',
  background: `linear-gradient(to ${direction}, transparent, #a27b5c)`,
  margin: direction === 'right' ? '0 10px 0 0' : '0 0 0 10px'
});

const sectionTitleStyle = {
  fontSize: '40px',
  fontWeight: '600',
  color: '#5e503f',
  fontFamily: 'serif'
};

function Mainpage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Hotdrinks");
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleOrdersClick = () => {
    if (!isAuthenticated) {
      alert('Please sign in or login to view your orders');
      navigate('/signin');
      return;
    }
    navigate('/orders');
  };

  const handleImageClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewFullMenu = () => {
    navigate(`/${selectedCategory}`);
  };

  const SectionDivider = ({ title }) => (
    <div style={sectionDividerStyle}>
      <div style={gradientLineStyle('right')}></div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px', fontSize: '20px' }}>🍃</span>
        <span style={sectionTitleStyle}>{title}</span>
        <span style={{ marginLeft: '8px', fontSize: '20px' }}>🍃</span>
      </div>
      <div style={gradientLineStyle('left')}></div>
    </div>
  );

  const [reviews, setReviews] = useState([]);
const [reviewInput, setReviewInput] = useState({ name: '', message: '' });

const handleReviewSubmit = (e) => {
  e.preventDefault();
  if (!reviewInput.name.trim() || !reviewInput.message.trim()) return;

  setReviews([...reviews, reviewInput]);
  setReviewInput({ name: '', message: '' });
};

  return (
    <div className="qwe">
      <div className="Header">
        <img src={coffeeShopImage} alt="Coffee Shop" className="Shop" />
        {isAuthenticated ? (
          <button onClick={handleLogout} className="Signin">Logout</button>
        ) : (
          <button onClick={() => handleNavigation('/signin')} className="Signin">Sign In</button>
        )}
        <button onClick={() => handleNavigation('/AboutPage')} className="About">About</button>
        <button onClick={() => handleNavigation('/Cart')} className="Cart">Cart</button>
        <button onClick={handleOrdersClick} className="Orders">Your Orders</button>
        <button onClick={() => handleNavigation('/ContactPage')} className="Contact">Contact</button>
        <h1 className="cafename">Welcome to my Cafe</h1>
        <p className="intro">Welcome to Cafe - where flavor meets finesse.<br/> Enjoy hand-crafted beverages and curated bites in a space designed for comfort and connection.</p>
      </div>

      <SectionDivider title="Here is our cafe menu" />

      <div className="Container">
        <div className="Menuimage">
          <div className="items">
            <img
              src="/Hot_Drinks/coffey-cup.jpg"
              alt="Hot coffee"
              className={`images ${selectedCategory === 'Hotdrinks' ? 'active' : ''}`}
              onClick={() => handleImageClick('Hotdrinks')}
            />
            <p>Hot Drinks</p>
          </div>
          
          <div className="items">
            <img
              src="/cold_drinks/iced-refreshing-drink.jpg"
              alt="Iced drinks"
              className={`images ${selectedCategory === 'Colddrinks' ? 'active' : ''}`}
              onClick={() => handleImageClick('Colddrinks')}
            />
            <p>Cold Drinks</p>
          </div>
        
          <div className="items">
            <img
              src="/Pastries/straswberry-sweet-dessert.jpg"
              alt="Desserts"
              className={`images ${selectedCategory === 'Desserts' ? 'active' : ''}`}
              onClick={() => handleImageClick('Desserts')}
            />
            <p>Desserts</p>
          </div>
          
          <div className="items">
            <img
              src="/Light_Meals/Light meals.jpg"
              alt="Light meals"
              className={`images ${selectedCategory === 'Meals' ? 'active' : ''}`}
              onClick={() => handleImageClick('Meals')}
            />
            <p>Light Meals</p>
          </div>
        </div>

        {selectedCategory && (
          <div className="preview">
            <h2 className="previewTitle">{selectedCategory.replace('_', ' ').toUpperCase()}</h2>
            <div className="itemsContainer">
              {menuPreviews[selectedCategory]?.map((item, index) => (
                <div key={index} className="item">
                  <img src={item.img} alt={item.name} className="itemImage" />
                  <div>
                    <h3 className="itemName">{item.name}</h3>
                    <p className="itemDesc">{item.desc}</p>
                    <p className="itemPrice">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="button" onClick={handleViewFullMenu}>
              See Full Menu ➔
            </button>
          </div>
        )}
      </div>

      <SectionDivider title="Reviews" />
<div className="reviews-container">
  <form className="review-form" onSubmit={handleReviewSubmit}>
    <input
      type="text"
      placeholder="Your name"
      value={reviewInput.name}
      onChange={(e) => setReviewInput({ ...reviewInput, name: e.target.value })}
      required
    />
    <textarea
      placeholder="Write your review..."
      value={reviewInput.message}
      onChange={(e) => setReviewInput({ ...reviewInput, message: e.target.value })}
      required
    ></textarea>
    <button type="submit">Submit Review</button>
  </form>

  <div className="submitted-reviews">
    {reviews.length === 0 ? (
      <p className="coming-soon">No reviews yet. Be the first!</p>
    ) : (
      reviews.map((rev, idx) => (
        <div key={idx} className="review">
          <h4>{rev.name}</h4>
          <p>{rev.message}</p>
        </div>
      ))
    )}
  </div>
</div>

    </div>
  );
}

export default Mainpage;