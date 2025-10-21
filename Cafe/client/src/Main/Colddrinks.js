import "./Colddrinks.css";
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Colddrinks() {
    const { cartItems, addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <h1 className="menu-heading">Cold Drinks Menu</h1>

            <h2>Milkshakes</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/cold_drinks/Strawberry Milkshake.jpeg" alt="Strawberry Milkshake" className="menu-img" />
                    <h3 className="menu-title">Strawberry Milkshake</h3>
                    <p className="menu-desc">A creamy blend of milk, ice cream, and fresh strawberries.</p>
                    <p>₹120</p>
                    <button 
                        className={`cart ${isItemInCart("Strawberry Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Strawberry Milkshake",
                            price: "₹120",
                            description: "A creamy blend of milk, ice cream, and fresh strawberries.",
                            image: "/cold_drinks/Strawberry Milkshake.jpeg"
                        })}
                    >
                        {isItemInCart("Strawberry Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Chocolate Milkshake 🧋.jpeg" alt="Chocolate Milkshake" className="menu-img" />
                    <h3 className="menu-title">Chocolate Milkshake</h3>
                    <p className="menu-desc">Decadent chocolate syrup mixed with milk and vanilla ice cream.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Chocolate Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Chocolate Milkshake",
                            price: "₹130",
                            description: "Decadent chocolate syrup mixed with milk and vanilla ice cream.",
                            image: "/cold_drinks/Chocolate Milkshake 🧋.jpeg"
                        })}
                    >
                        {isItemInCart("Chocolate Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Vanilla Milkshake.jpeg" alt="Vanilla Milkshake" className="menu-img" />
                    <h3 className="menu-title">Vanilla Milkshake</h3>
                    <p className="menu-desc">Classic vanilla flavor in a smooth, creamy shake.</p>
                    <p>₹120</p>
                    <button 
                        className={`cart ${isItemInCart("Vanilla Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Vanilla Milkshake",
                            price: "₹120",
                            description: "Classic vanilla flavor in a smooth, creamy shake.",
                            image: "/cold_drinks/Vanilla Milkshake.jpeg"
                        })}
                    >
                        {isItemInCart("Vanilla Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/mangomilkshake.jpeg" alt="Mango Milkshake" className="menu-img" />
                    <h3 className="menu-title">Mango Milkshake</h3>
                    <p className="menu-desc">Sweet ripe mangoes blended with chilled milk and ice cream.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Mango Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mango Milkshake",
                            price: "₹130",
                            description: "Sweet ripe mangoes blended with chilled milk and ice cream.",
                            image: "/cold_drinks/mangomilkshake.jpeg"
                        })}
                    >
                        {isItemInCart("Mango Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/pineapple milkshake.jpeg" alt="Pineapple Milkshake" className="menu-img" />
                    <h3 className="menu-title">Pineapple Milkshake</h3>
                    <p className="menu-desc">Tropical pineapple flavor blended into a smooth shake.</p>
                    <p>₹125</p>
                    <button 
                        className={`cart ${isItemInCart("Pineapple Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Pineapple Milkshake",
                            price: "₹125",
                            description: "Tropical pineapple flavor blended into a smooth shake.",
                            image: "/cold_drinks/pineapple milkshake.jpeg"
                        })}
                    >
                        {isItemInCart("Pineapple Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Creamy Dreamy Banana Milkshake_ The Ultimate 5-Minute Treat!.jpeg" alt="Banana Milkshake" className="menu-img" />
                    <h3 className="menu-title">Banana Milkshake</h3>
                    <p className="menu-desc">Bananas and chilled milk blended into a creamy treat.</p>
                    <p>₹110</p>
                    <button 
                        className={`cart ${isItemInCart("Banana Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Banana Milkshake",
                            price: "₹110",
                            description: "Bananas and chilled milk blended into a creamy treat.",
                            image: "/cold_drinks/Creamy Dreamy Banana Milkshake_ The Ultimate 5-Minute Treat!.jpeg"
                        })}
                    >
                        {isItemInCart("Banana Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Oreo Milkshake Recipe.jpeg" alt="Oreo Milkshake" className="menu-img" />
                    <h3 className="menu-title">Oreo Milkshake</h3>
                    <p className="menu-desc">Crushed Oreos blended with ice cream and chocolate drizzle.</p>
                    <p>₹140</p>
                    <button 
                        className={`cart ${isItemInCart("Oreo Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Oreo Milkshake",
                            price: "₹140",
                            description: "Crushed Oreos blended with ice cream and chocolate drizzle.",
                            image: "/cold_drinks/Oreo Milkshake Recipe.jpeg"
                        })}
                    >
                        {isItemInCart("Oreo Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Mint Chocolate Chip Milkshake.webp" alt="Mint Chocolate Chip Milkshake" className="menu-img" />
                    <h3 className="menu-title">Mint Chocolate Chip Milkshake</h3>
                    <p className="menu-desc">Cool mint and chocolate chips blended into a creamy shake.</p>
                    <p>₹140</p>
                    <button 
                        className={`cart ${isItemInCart("Mint Chocolate Chip Milkshake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mint Chocolate Chip Milkshake",
                            price: "₹140",
                            description: "Cool mint and chocolate chips blended into a creamy shake.",
                            image: "/cold_drinks/Mint Chocolate Chip Milkshake.webp"
                        })}
                    >
                        {isItemInCart("Mint Chocolate Chip Milkshake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>

            <h2>Fresh Juices</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/cold_drinks/watermelon juice.jpeg" alt="Watermelon Juice" className="menu-img" />
                    <h3 className="menu-title">Watermelon Juice</h3>
                    <p className="menu-desc">Chilled and hydrating juice from ripe watermelon.</p>
                    <p>₹90</p>
                    <button 
                        className={`cart ${isItemInCart("Watermelon Juice") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Watermelon Juice",
                            price: "₹90",
                            description: "Chilled and hydrating juice from ripe watermelon.",
                            image: "/cold_drinks/watermelon juice.jpeg"
                        })}
                    >
                        {isItemInCart("Watermelon Juice") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/lemon juice.jpeg" alt="Lemon Juice" className="menu-img" />
                    <h3 className="menu-title">Lemon Juice</h3>
                    <p className="menu-desc">Zesty lemonade with a cooling touch of mint.</p>
                    <p>₹80</p>
                    <button 
                        className={`cart ${isItemInCart("Lemon Juice") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Lemon Juice",
                            price: "₹80",
                            description: "Zesty lemonade with a cooling touch of mint.",
                            image: "/cold_drinks/lemon juice.jpeg"
                        })}
                    >
                        {isItemInCart("Lemon Juice") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Grape Apple Punch Juice.jpeg" alt="Grape Apple Punch Juice" className="menu-img" />
                    <h3 className="menu-title">Grape Apple Punch</h3>
                    <p className="menu-desc">A refreshing fusion of grape and apple juices.</p>
                    <p>₹95</p>
                    <button 
                        className={`cart ${isItemInCart("Grape Apple Punch") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Grape Apple Punch",
                            price: "₹95",
                            description: "A refreshing fusion of grape and apple juices.",
                            image: "/cold_drinks/Grape Apple Punch Juice.jpeg"
                        })}
                    >
                        {isItemInCart("Grape Apple Punch") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Orange Lemonade.jpeg" alt="Orange Lemonade" className="menu-img" />
                    <h3 className="menu-title">Orange Lemonade</h3>
                    <p className="menu-desc">A tangy-sweet blend of fresh orange and lemon juices.</p>
                    <p>₹85</p>
                    <button 
                        className={`cart ${isItemInCart("Orange Lemonade") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Orange Lemonade",
                            price: "₹85",
                            description: "A tangy-sweet blend of fresh orange and lemon juices.",
                            image: "/cold_drinks/Orange Lemonade.jpeg"
                        })}
                    >
                        {isItemInCart("Orange Lemonade") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Papaya Juice.jpeg" alt="Papaya Juice" className="menu-img" />
                    <h3 className="menu-title">Papaya Juice</h3>
                    <p className="menu-desc">Smooth papaya juice rich in flavor and nutrition.</p>
                    <p>₹90</p>
                    <button 
                        className={`cart ${isItemInCart("Papaya Juice") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Papaya Juice",
                            price: "₹90",
                            description: "Smooth papaya juice rich in flavor and nutrition.",
                            image: "/cold_drinks/Papaya Juice.jpeg"
                        })}
                    >
                        {isItemInCart("Papaya Juice") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/How To Make Apple Juice With a Juicer - Easy Recipe!.jpeg" alt="Apple Juice" className="menu-img" />
                    <h3 className="menu-title">Apple Juice</h3>
                    <p className="menu-desc">Fresh-pressed apple juice served cold.</p>
                    <p>₹90</p>
                    <button 
                        className={`cart ${isItemInCart("Apple Juice") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Apple Juice",
                            price: "₹90",
                            description: "Fresh-pressed apple juice served cold.",
                            image: "/cold_drinks/How To Make Apple Juice With a Juicer - Easy Recipe!.jpeg"
                        })}
                    >
                        {isItemInCart("Apple Juice") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/LEMON MINT.jpeg" alt="Lemon Mint" className="menu-img" />
                    <h3 className="menu-title">Lemon Mint</h3>
                    <p className="menu-desc">Lively lemon juice with fresh mint leaves.</p>
                    <p>₹85</p>
                    <button 
                        className={`cart ${isItemInCart("Lemon Mint") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Lemon Mint",
                            price: "₹85",
                            description: "Lively lemon juice with fresh mint leaves.",
                            image: "/cold_drinks/LEMON MINT.jpeg"
                        })}
                    >
                        {isItemInCart("Lemon Mint") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Mango Juice.jpeg" alt="Mango Juice" className="menu-img" />
                    <h3 className="menu-title">Mango Juice</h3>
                    <p className="menu-desc">Ripe mangoes blended into a juicy delight.</p>
                    <p>₹100</p>
                    <button 
                        className={`cart ${isItemInCart("Mango Juice") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mango Juice",
                            price: "₹100",
                            description: "Ripe mangoes blended into a juicy delight.",
                            image: "/cold_drinks/Mango Juice.jpeg"
                        })}
                    >
                        {isItemInCart("Mango Juice") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Mojito.jpeg" alt="Mojito" className="menu-img" />
                    <h3 className="menu-title">Mojito</h3>
                    <p className="menu-desc">Mint, lemon, and soda for a fizzy refresher.</p>
                    <p>₹100</p>
                    <button 
                        className={`cart ${isItemInCart("Mojito") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mojito",
                            price: "₹100",
                            description: "Mint, lemon, and soda for a fizzy refresher.",
                            image: "/cold_drinks/Mojito.jpeg"
                        })}
                    >
                        {isItemInCart("Mojito") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Passion Fruit Juice.webp" alt="Passion Fruit Juice" className="menu-img" />
                    <h3 className="menu-title">Passion Fruit Juice</h3>
                    <p className="menu-desc">Tropical passion fruit with a sweet-tangy kick.</p>
                    <p>₹100</p>
                    <button 
                        className={`cart ${isItemInCart("Passion Fruit Juice") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Passion Fruit Juice",
                            price: "₹100",
                            description: "Tropical passion fruit with a sweet-tangy kick.",
                            image: "/cold_drinks/Passion Fruit Juice.webp"
                        })}
                    >
                        {isItemInCart("Passion Fruit Juice") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Pear Juice in Blender or Juicer.jpg" alt="Pear Juice" className="menu-img" />
                    <h3 className="menu-title">Pear Juice</h3>
                    <p className="menu-desc">Delicately sweet and juicy pear extract.</p>
                    <p>₹100</p>
                    <button 
                        className={`cart ${isItemInCart("Pear Juice") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Pear Juice",
                            price: "₹100",
                            description: "Delicately sweet and juicy pear extract.",
                            image: "/cold_drinks/Pear Juice in Blender or Juicer.jpg"
                        })}
                    >
                        {isItemInCart("Pear Juice") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Peach Strawberry Lemonade.jpg" alt="Peach Strawberry Lemonade" className="menu-img" />
                    <h3 className="menu-title">Peach Strawberry Lemonade</h3>
                    <p className="menu-desc">A fruity lemonade blend with peach and strawberry.</p>
                    <p>₹100</p>
                    <button 
                        className={`cart ${isItemInCart("Peach Strawberry Lemonade") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Peach Strawberry Lemonade",
                            price: "₹100",
                            description: "A fruity lemonade blend with peach and strawberry.",
                            image: "/cold_drinks/Peach Strawberry Lemonade.jpg"
                        })}
                    >
                        {isItemInCart("Peach Strawberry Lemonade") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>

            <h2>Smoothies</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/cold_drinks/Raspberry Peach Smoothie.jpeg" alt="Raspberry Peach Smoothie" className="menu-img" />
                    <h3 className="menu-title">Raspberry Peach Smoothie</h3>
                    <p className="menu-desc">A fruity mix of peach and raspberry blended to perfection.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Raspberry Peach Smoothie") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Raspberry Peach Smoothie",
                            price: "₹130",
                            description: "A fruity mix of peach and raspberry blended to perfection.",
                            image: "/cold_drinks/Raspberry Peach Smoothie.jpeg"
                        })}
                    >
                        {isItemInCart("Raspberry Peach Smoothie") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Mango Orange Smoothie.jpeg" alt="Mango Orange Smoothie" className="menu-img" />
                    <h3 className="menu-title">Mango Orange Smoothie</h3>
                    <p className="menu-desc">Smooth mango and zesty orange come together in this smoothie.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Mango Orange Smoothie") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mango Orange Smoothie",
                            price: "₹130",
                            description: "Smooth mango and zesty orange come together in this smoothie.",
                            image: "/cold_drinks/Mango Orange Smoothie.jpeg"
                        })}
                    >
                        {isItemInCart("Mango Orange Smoothie") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Mixed Berry Smoothie _ Mixed Berry Chia Seed Smoothie.jpeg" alt="Mixed Berry Smoothie" className="menu-img" />
                    <h3 className="menu-title">Mixed Berry Smoothie</h3>
                    <p className="menu-desc">A vibrant blend of berries, yogurt, and chia seeds.</p>
                    <p>₹140</p>
                    <button 
                        className={`cart ${isItemInCart("Mixed Berry Smoothie") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mixed Berry Smoothie",
                            price: "₹140",
                            description: "A vibrant blend of berries, yogurt, and chia seeds.",
                            image: "/cold_drinks/Mixed Berry Smoothie _ Mixed Berry Chia Seed Smoothie.jpeg"
                        })}
                    >
                        {isItemInCart("Mixed Berry Smoothie") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/_Berry Delight_.jpeg" alt="Berry Delight" className="menu-img" />
                    <h3 className="menu-title">Berry Delight</h3>
                    <p className="menu-desc">A refreshing medley of strawberries, blueberries, and raspberries.</p>
                    <p>₹135</p>
                    <button 
                        className={`cart ${isItemInCart("Berry Delight") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Berry Delight",
                            price: "₹135",
                            description: "A refreshing medley of strawberries, blueberries, and raspberries.",
                            image: "/cold_drinks/_Berry Delight_.jpeg"
                        })}
                    >
                        {isItemInCart("Berry Delight") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Pear Ginger Smoothie (Paleo or Vegan!).jpeg" alt="Pear Ginger Smoothie" className="menu-img" />
                    <h3 className="menu-title">Pear Ginger Smoothie</h3>
                    <p className="menu-desc">Spicy ginger paired with the mild sweetness of pear.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Pear Ginger Smoothie") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Pear Ginger Smoothie",
                            price: "₹130",
                            description: "Spicy ginger paired with the mild sweetness of pear.",
                            image: "/cold_drinks/Pear Ginger Smoothie (Paleo or Vegan!).jpeg"
                        })}
                    >
                        {isItemInCart("Pear Ginger Smoothie") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Banana Protein Coffee Smoothie To Kickstart Your Day 💪☕.jpeg" alt="Banana Coffee Smoothie" className="menu-img" />
                    <h3 className="menu-title">Banana Coffee Smoothie</h3>
                    <p className="menu-desc">Energizing smoothie with banana and cold brew coffee.</p>
                    <p>₹140</p>
                    <button 
                        className={`cart ${isItemInCart("Banana Coffee Smoothie") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Banana Coffee Smoothie",
                            price: "₹140",
                            description: "Energizing smoothie with banana and cold brew coffee.",
                            image: "/cold_drinks/Banana Protein Coffee Smoothie To Kickstart Your Day 💪☕.jpeg"
                        })}
                    >
                        {isItemInCart("Banana Coffee Smoothie") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Strawberry Kiwi Smoothie.jpeg" alt="Strawberry Kiwi Smoothie" className="menu-img" />
                    <h3 className="menu-title">Strawberry Kiwi Smoothie</h3>
                    <p className="menu-desc">A sweet-tart blend of strawberry and kiwi fruits.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Strawberry Kiwi Smoothie") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Strawberry Kiwi Smoothie",
                            price: "₹130",
                            description: "A sweet-tart blend of strawberry and kiwi fruits.",
                            image: "/cold_drinks/Strawberry Kiwi Smoothie.jpeg"
                        })}
                    >
                        {isItemInCart("Strawberry Kiwi Smoothie") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/cold_drinks/Pineapple Smoothie.jpeg" alt="Pineapple Smoothie" className="menu-img" />
                    <h3 className="menu-title">Pineapple Smoothie</h3>
                    <p className="menu-desc">Tropical pineapple smoothie with a creamy twist.</p>
                    <p>₹125</p>
                    <button 
                        className={`cart ${isItemInCart("Pineapple Smoothie") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Pineapple Smoothie",
                            price: "₹125",
                            description: "Tropical pineapple smoothie with a creamy twist.",
                            image: "/cold_drinks/Pineapple Smoothie.jpeg"
                        })}
                    >
                        {isItemInCart("Pineapple Smoothie") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Colddrinks;
