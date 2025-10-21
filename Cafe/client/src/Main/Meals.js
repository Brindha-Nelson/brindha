import "./Meals.css";
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Meals() {
  const { cartItems, addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image
    });
  };

  const isItemInCart = (title) => {
    return cartItems.some(item => item.title === title);
  };

  const handleButtonClick = (item) => {
    if (isItemInCart(item.title)) {
      navigate('/Cart');
    } else {
      handleAddToCart(item);
    }
  };

  return (
    <div className="menu-container">
      <h1 className="menu-heading">Meals Menu</h1>
      <div className="menu-grid">
        <div className="menu-card">
          <img src="/Light_Meals/OMURICE.jpeg" alt="Omurice" className="menu-img" />
          <h3 className="menu-title">Omurice</h3>
          <p className="menu-desc">Fluffy omelet over fried rice, drizzled with tangy ketchup sauce.</p>
          <p className="menu-price">₹180</p>
          <button 
            className={`cart ${isItemInCart("Omurice") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Omurice",
              price: "₹180",
              description: "Fluffy omelet over fried rice, drizzled with tangy ketchup sauce.",
              image: "/Light_Meals/OMURICE.jpeg"
            })}
          >
            {isItemInCart("Omurice") ? "View Cart" : "Add to Cart"}
          </button>
        </div>

        <div className="menu-card">
          <img src="/Light_Meals/Light meals.jpg" alt="Souffle Pancakes" className="menu-img" />
          <h3 className="menu-title">Souffle Pancakes</h3>
          <p className="menu-desc">Soft, airy pancakes served with whipped cream and maple syrup.</p>
          <p className="menu-price">₹160</p>
          <button 
            className={`cart ${isItemInCart("Souffle Pancakes") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Souffle Pancakes",
              price: "₹160",
              description: "Soft, airy pancakes served with whipped cream and maple syrup.",
              image: "/Light_Meals/Light meals.jpg"
            })}
          >
            {isItemInCart("Souffle Pancakes") ? "View Cart" : "Add to Cart"}
          </button>
        </div>

        <div className="menu-card">
          <img src="/Light_Meals/sandwich.jpeg" alt="Sandwich" className="menu-img" />
          <h3 className="menu-title">Club Sandwich</h3>
          <p className="menu-desc">Toasted layers of veggies, cheese, and mayo — a hearty bite.</p>
          <p className="menu-price">₹120</p>
          <button 
            className={`cart ${isItemInCart("Club Sandwich") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Club Sandwich",
              price: "₹120",
              description: "Toasted layers of veggies, cheese, and mayo — a hearty bite.",
              image: "/Light_Meals/sandwich.jpeg"
            })}
          >
            {isItemInCart("Club Sandwich") ? "View Cart" : "Add to Cart"}
          </button>
        </div>

        <div className="menu-card">
          <img src="/Light_Meals/Creamy Cauliflower Soup.jpeg" alt="Creamy Cauliflower Soup" className="menu-img" />
          <h3 className="menu-title">Creamy Cauliflower Soup</h3>
          <p className="menu-desc">Silky, comforting soup with a hint of garlic and herbs.</p>
          <p className="menu-price">₹110</p>
          <button 
            className={`cart ${isItemInCart("Creamy Cauliflower Soup") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Creamy Cauliflower Soup",
              price: "₹110",
              description: "Silky, comforting soup with a hint of garlic and herbs.",
              image: "/Light_Meals/Creamy Cauliflower Soup.jpeg"
            })}
          >
            {isItemInCart("Creamy Cauliflower Soup") ? "View Cart" : "Add to Cart"}
          </button>
        </div>

        <div className="menu-card">
          <img src="/Light_Meals/Italian Chopped Salad Recipe_ Flavorful and Easy to Make.jpeg" alt="Italian Chopped Salad" className="menu-img" />
          <h3 className="menu-title">Italian Chopped Salad</h3>
          <p className="menu-desc">Crunchy greens, olives, tomatoes & cheese with zesty dressing.</p>
          <p className="menu-price">₹150</p>
          <button 
            className={`cart ${isItemInCart("Italian Chopped Salad") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Italian Chopped Salad",
              price: "₹150",
              description: "Crunchy greens, olives, tomatoes & cheese with zesty dressing.",
              image: "/Light_Meals/Italian Chopped Salad Recipe_ Flavorful and Easy to Make.jpeg"
            })}
          >
            {isItemInCart("Italian Chopped Salad") ? "View Cart" : "Add to Cart"}
          </button>
        </div>

        <div className="menu-card">
          <img src="/Light_Meals/Gourmet Omelette.jpeg" alt="Gourmet Omelette" className="menu-img" />
          <h3 className="menu-title">Gourmet Omelette</h3>
          <p className="menu-desc">Stuffed with mushrooms, cheese & herbs — rich and filling.</p>
          <p className="menu-price">₹130</p>
          <button 
            className={`cart ${isItemInCart("Gourmet Omelette") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Gourmet Omelette",
              price: "₹130",
              description: "Stuffed with mushrooms, cheese & herbs — rich and filling.",
              image: "/Light_Meals/Gourmet Omelette.jpeg"
            })}
          >
            {isItemInCart("Gourmet Omelette") ? "View Cart" : "Add to Cart"}
          </button>
        </div>

        <div className="menu-card">
          <img src="/Light_Meals/Air Fryer Crispy Chicken Breast.jpeg" alt="Fryer Crispy Chicken Breast" className="menu-img" />
          <h3 className="menu-title">Crispy Chicken Breast</h3>
          <p className="menu-desc">Juicy chicken with a golden crispy crust — air fried perfection.</p>
          <p className="menu-price">₹200</p>
          <button 
            className={`cart ${isItemInCart("Crispy Chicken Breast") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Crispy Chicken Breast",
              price: "₹200",
              description: "Juicy chicken with a golden crispy crust — air fried perfection.",
              image: "/Light_Meals/Air Fryer Crispy Chicken Breast.jpeg"
            })}
          >
            {isItemInCart("Crispy Chicken Breast") ? "View Cart" : "Add to Cart"}
          </button>
        </div>

        <div className="menu-card">
          <img src="/Light_Meals/Easy Ginger Soy Cod Recipe.jpeg" alt="Ginger Soy Cod" className="menu-img" />
          <h3 className="menu-title">Ginger Soy Cod</h3>
          <p className="menu-desc">Tender cod in a savory ginger soy glaze, served with veggies.</p>
          <p className="menu-price">₹220</p>
          <button 
            className={`cart ${isItemInCart("Ginger Soy Cod") ? "in-cart" : ""}`}
            onClick={() => handleButtonClick({
              title: "Ginger Soy Cod",
              price: "₹220",
              description: "Tender cod in a savory ginger soy glaze, served with veggies.",
              image: "/Light_Meals/Easy Ginger Soy Cod Recipe.jpeg"
            })}
          >
            {isItemInCart("Ginger Soy Cod") ? "View Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meals;
