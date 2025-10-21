import "./Hotdrinks.css";
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Hotdrinks() {
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
            <h1 className="menu-heading">Hot Drinks Menu</h1>

            <h2>Coffee</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/Hot_Drinks/cappuccino.jpeg" alt="Cappuccino" className="menu-img" />
                    <h3 className="menu-title">Cappuccino</h3>
                    <p className="menu-desc">Velvety espresso layered with steamed milk and rich foam.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Cappuccino") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Cappuccino",
                            price: "₹130",
                            description: "Velvety espresso layered with steamed milk and rich foam.",
                            image: "/Hot_Drinks/cappuccino.jpeg"
                        })}
                    >
                        {isItemInCart("Cappuccino") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Eggnog Latte.jpeg" alt="Eggnog Latte" className="menu-img" />
                    <h3 className="menu-title">Eggnog Latte</h3>
                    <p className="menu-desc">Creamy eggnog blended with bold espresso and a hint of nutmeg.</p>
                    <p>₹150</p>
                    <button 
                        className={`cart ${isItemInCart("Eggnog Latte") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Eggnog Latte",
                            price: "₹150",
                            description: "Creamy eggnog blended with bold espresso and a hint of nutmeg.",
                            image: "/Hot_Drinks/Eggnog Latte.jpeg"
                        })}
                    >
                        {isItemInCart("Eggnog Latte") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Hot Chocolate.jpeg" alt="Hot Chocolate" className="menu-img" />
                    <h3 className="menu-title">Hot Chocolate</h3>
                    <p className="menu-desc">Silky-smooth chocolate drink topped with whipped cream.</p>
                    <p>₹120</p>
                    <button 
                        className={`cart ${isItemInCart("Hot Chocolate") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Hot Chocolate",
                            price: "₹120",
                            description: "Silky-smooth chocolate drink topped with whipped cream.",
                            image: "/Hot_Drinks/Hot Chocolate.jpeg"
                        })}
                    >
                        {isItemInCart("Hot Chocolate") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Mocha.jpeg" alt="Mocha" className="menu-img" />
                    <h3 className="menu-title">Mocha</h3>
                    <p className="menu-desc">A sweet mix of espresso and chocolate with creamy milk and whipped topping.</p>
                    <p>₹140</p>
                    <button 
                        className={`cart ${isItemInCart("Mocha") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mocha",
                            price: "₹140",
                            description: "A sweet mix of espresso and chocolate with creamy milk and whipped topping.",
                            image: "/Hot_Drinks/Mocha.jpeg"
                        })}
                    >
                        {isItemInCart("Mocha") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/flat white.jpeg" alt="Flat White" className="menu-img" />
                    <h3 className="menu-title">Flat White</h3>
                    <p className="menu-desc">Smooth espresso with a velvety microfoam finish.</p>
                    <p>₹125</p>
                    <button 
                        className={`cart ${isItemInCart("Flat White") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Flat White",
                            price: "₹125",
                            description: "Smooth espresso with a velvety microfoam finish.",
                            image: "/Hot_Drinks/flat white.jpeg"
                        })}
                    >
                        {isItemInCart("Flat White") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Latte macchiato.jpg" alt="Latte Macchiato" className="menu-img" />
                    <h3 className="menu-title">Latte Macchiato</h3>
                    <p className="menu-desc">Steamed milk marked with rich espresso for a layered delight.</p>
                    <p>₹135</p>
                    <button 
                        className={`cart ${isItemInCart("Latte Macchiato") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Latte Macchiato",
                            price: "₹135",
                            description: "Steamed milk marked with rich espresso for a layered delight.",
                            image: "/Hot_Drinks/Latte macchiato.jpg"
                        })}
                    >
                        {isItemInCart("Latte Macchiato") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Biscoff Affogato - Hein van Tonder - Food Photographer & Stylist.jpg" alt="Biscoff Affogato" className="menu-img" />
                    <h3 className="menu-title">Biscoff Affogato</h3>
                    <p className="menu-desc">A scoop of vanilla ice cream drowned in hot espresso with Biscoff crumble.</p>
                    <p>₹160</p>
                    <button 
                        className={`cart ${isItemInCart("Biscoff Affogato") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Biscoff Affogato",
                            price: "₹160",
                            description: "A scoop of vanilla ice cream drowned in hot espresso with Biscoff crumble.",
                            image: "/Hot_Drinks/Biscoff Affogato - Hein van Tonder - Food Photographer & Stylist.jpg"
                        })}
                    >
                        {isItemInCart("Biscoff Affogato") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Marshmallow Cardamom Turkish Coffee.jpg" alt="Marshmallow Cardamom Coffee" className="menu-img" />
                    <h3 className="menu-title">Marshmallow Cardamom Coffee</h3>
                    <p className="menu-desc">Fragrant cardamom espresso topped with toasted marshmallows.</p>
                    <p>₹145</p>
                    <button 
                        className={`cart ${isItemInCart("Marshmallow Cardamom Coffee") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Marshmallow Cardamom Coffee",
                            price: "₹145",
                            description: "Fragrant cardamom espresso topped with toasted marshmallows.",
                            image: "/Hot_Drinks/Marshmallow Cardamom Turkish Coffee.jpg"
                        })}
                    >
                        {isItemInCart("Marshmallow Cardamom Coffee") ? "View Cart" : "Add to Cart"}
                    </button>                
                </div>
            </div>

            <h2>Cold Coffee</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/Hot_Drinks/Iced Mocha.jpeg" alt="Iced Mocha" className="menu-img" />
                    <h3 className="menu-title">Iced Mocha</h3>
                    <p className="menu-desc">Espresso, cold milk, and chocolate syrup served over ice.</p>
                    <p>₹140</p>
                    <button 
                        className={`cart ${isItemInCart("Iced Mocha") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Iced Mocha",
                            price: "₹140",
                            description: "Espresso, cold milk, and chocolate syrup served over ice.",
                            image: "/Hot_Drinks/Iced Mocha.jpeg"
                        })}
                    >
                        {isItemInCart("Iced Mocha") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Cold Brew.jpeg" alt="Cold Brew" className="menu-img" />
                    <h3 className="menu-title">Cold Brew</h3>
                    <p className="menu-desc">Smooth, slow-steeped coffee with a naturally sweet finish.</p>
                    <p>₹135</p>
                    <button 
                        className={`cart ${isItemInCart("Cold Brew") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Cold Brew",
                            price: "₹135",
                            description: "Smooth, slow-steeped coffee with a naturally sweet finish.",
                            image: "/Hot_Drinks/Cold Brew.jpeg"
                        })}
                    >
                        {isItemInCart("Cold Brew") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Mazagran.jpeg" alt="Mazagran" className="menu-img" />
                    <h3 className="menu-title">Mazagran</h3>
                    <p className="menu-desc">Iced espresso with lemon juice and a hint of sugar for a refreshing twist.</p>
                    <p>₹145</p>
                    <button 
                        className={`cart ${isItemInCart("Mazagran") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mazagran",
                            price: "₹145",
                            description: "Iced espresso with lemon juice and a hint of sugar for a refreshing twist.",
                            image: "/Hot_Drinks/Mazagran.jpeg"
                        })}
                    >
                        {isItemInCart("Mazagran") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Vietnamese Iced Coffee.jpeg" alt="Vietnamese Iced Coffee" className="menu-img" />
                    <h3 className="menu-title">Vietnamese Iced Coffee</h3>
                    <p className="menu-desc">Strong coffee over ice with sweetened condensed milk.</p>
                    <p>₹150</p>
                    <button 
                        className={`cart ${isItemInCart("Vietnamese Iced Coffee") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Vietnamese Iced Coffee",
                            price: "₹150",
                            description: "Strong coffee over ice with sweetened condensed milk.",
                            image: "/Hot_Drinks/Vietnamese Iced Coffee.jpeg"
                        })}
                    >
                        {isItemInCart("Vietnamese Iced Coffee") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Iced Caramel Macchiato.jpeg" alt="Iced Caramel Macchiato" className="menu-img" />
                    <h3 className="menu-title">Iced Caramel Macchiato</h3>
                    <p className="menu-desc">Espresso layered with milk, ice, and buttery caramel drizzle.</p>
                    <p>₹135</p>
                    <button 
                        className={`cart ${isItemInCart("Iced Caramel Macchiato") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Iced Caramel Macchiato",
                            price: "₹135",
                            description: "Espresso layered with milk, ice, and buttery caramel drizzle.",
                            image: "/Hot_Drinks/Iced Caramel Macchiato.jpeg"
                        })}
                    >
                        {isItemInCart("Iced Caramel Macchiato") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Iced Americano.jpg" alt="Iced Americano" className="menu-img" />
                    <h3 className="menu-title">Iced Americano</h3>
                    <p className="menu-desc">Bold espresso mellowed with chilled water and ice.</p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Iced Americano") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Iced Americano",
                            price: "₹130",
                            description: "Bold espresso mellowed with chilled water and ice.",
                            image: "/Hot_Drinks/Iced Americano.jpg"
                        })}
                    >
                        {isItemInCart("Iced Americano") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Iced Caramel Latte Recipe.jpg" alt="Iced Caramel Latte" className="menu-img" />
                    <h3 className="menu-title">Iced Caramel Latte</h3>
                    <p className="menu-desc">Creamy caramel and espresso over ice for a cool treat.</p>
                    <p>₹135</p>
                    <button 
                        className={`cart ${isItemInCart("Iced Caramel Latte") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Iced Caramel Latte",
                            price: "₹135",
                            description: "Creamy caramel and espresso over ice for a cool treat.",
                            image: "/Hot_Drinks/Iced Caramel Latte Recipe.jpg"
                        })}
                    >
                        {isItemInCart("Iced Caramel Latte") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Refreshing Espresso Tonic Recipe.jpg" alt="Iced Espresso" className="menu-img" />
                    <h3 className="menu-title">Iced Espresso Tonic</h3>
                    <p className="menu-desc">Chilled espresso poured over sparkling tonic water and citrus.</p>
                    <p>₹145</p>
                    <button 
                        className={`cart ${isItemInCart("Iced Espresso Tonic") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Iced Espresso Tonic",
                            price: "₹145",
                            description: "Chilled espresso poured over sparkling tonic water and citrus.",
                            image: "/Hot_Drinks/Refreshing Espresso Tonic Recipe.jpg"
                        })}
                    >
                        {isItemInCart("Iced Espresso Tonic") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>

            <h2>Tea</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/Hot_Drinks/Caramel Elegance Black Tea.jpeg" alt="Black Tea" className="menu-img" />
                    <h3 className="menu-title">Black Tea</h3>
                    <p className="menu-desc">Premium black tea with hints of golden caramel.</p>
                    <p>₹90</p>
                    <button 
                        className={`cart ${isItemInCart("Black Tea") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Black Tea",
                            price: "₹90",
                            description: "Premium black tea with hints of golden caramel.",
                            image: "/Hot_Drinks/Caramel Elegance Black Tea.jpeg"
                        })}
                    >
                        {isItemInCart("Black Tea") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Rooibos.jpeg" alt="Rooibos" className="menu-img" />
                    <h3 className="menu-title">Rooibos</h3>
                    <p className="menu-desc">Naturally sweet South African red tea with earthy, nutty tones.</p>
                    <p>₹100</p>
                    <button 
                        className={`cart ${isItemInCart("Rooibos") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Rooibos",
                            price: "₹100",
                            description: "Naturally sweet South African red tea with earthy, nutty tones.",
                            image: "/Hot_Drinks/Rooibos.jpeg"
                        })}
                    >
                        {isItemInCart("Rooibos") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Green Tea.jpeg" alt="Green Tea" className="menu-img" />
                    <h3 className="menu-title">Green Tea</h3>
                    <p className="menu-desc">Lightly grassy and refreshing, rich in antioxidants.</p>
                    <p>₹95</p>
                    <button 
                        className={`cart ${isItemInCart("Green Tea") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Green Tea",
                            price: "₹95",
                            description: "Lightly grassy and refreshing, rich in antioxidants.",
                            image: "/Hot_Drinks/Green Tea.jpeg"
                        })}
                    >
                        {isItemInCart("Green Tea") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Lemon Balm Tea.jpeg" alt="Lemon Balm Tea" className="menu-img" />
                    <h3 className="menu-title">Lemon Balm Tea</h3>
                    <p className="menu-desc">Calming herbal tea with bright citrusy notes.</p>
                    <p>₹110</p>
                    <button 
                        className={`cart ${isItemInCart("Lemon Balm Tea") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Lemon Balm Tea",
                            price: "₹110",
                            description: "Calming herbal tea with bright citrusy notes.",
                            image: "/Hot_Drinks/Lemon Balm Tea.jpeg"
                        })}
                    >
                        {isItemInCart("Lemon Balm Tea") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Turmeric and Ginger Tea.jpg" alt="Turmeric and Ginger Tea" className="menu-img" />
                    <h3 className="menu-title">Turmeric and Ginger Tea</h3>
                    <p className="menu-desc">Spicy turmeric and zesty ginger brew with wellness benefits.</p>
                    <p>₹115</p>
                    <button 
                        className={`cart ${isItemInCart("Turmeric and Ginger Tea") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Turmeric and Ginger Tea",
                            price: "₹115",
                            description: "Spicy turmeric and zesty ginger brew with wellness benefits.",
                            image: "/Hot_Drinks/Turmeric and Ginger Tea.jpg"
                        })}
                    >
                        {isItemInCart("Turmeric and Ginger Tea") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Spiced Tangerine Herbal Tea Recipe - A Citrusy, Spiced Comfort Drink.jpg" alt="Tangerine Herbal Tea" className="menu-img" />
                    <h3 className="menu-title">Tangerine Herbal Tea</h3>
                    <p className="menu-desc">A tangy blend of citrus with subtle spices.</p>
                    <p>₹115</p>
                    <button 
                        className={`cart ${isItemInCart("Tangerine Herbal Tea") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Tangerine Herbal Tea",
                            price: "₹115",
                            description: "A tangy blend of citrus with subtle spices.",
                            image: "/Hot_Drinks/Spiced Tangerine Herbal Tea Recipe - A Citrusy, Spiced Comfort Drink.jpg"
                        })}
                    >
                        {isItemInCart("Tangerine Herbal Tea") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

                <div className="menu-card">
                    <img src="/Hot_Drinks/Experience the delicate aroma and soothing flavors of rose tea_ ภาพถ่ายสต็อก.jpg" alt="Rose Tea" className="menu-img" />
                    <h3 className="menu-title">Rose Tea</h3>
                    <p className="menu-desc">Fragrant petals steeped to create a soothing floral infusion.</p>
                    <p>₹120</p>
                    <button 
                        className={`cart ${isItemInCart("Rose Tea") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Rose Tea",
                            price: "₹120",
                            description: "Fragrant petals steeped to create a soothing floral infusion.",
                            image: "/Hot_Drinks/Experience the delicate aroma and soothing flavors of rose tea_ ภาพถ่ายสต็อก.jpg"
                        })}
                    >
                        {isItemInCart("Rose Tea") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Hot_Drinks/Milk Tea.jpg" alt="Milk Tea" className="menu-img" />
                    <h3 className="menu-title">Milk Tea</h3>
                    <p className="menu-desc">Traditional Indian-style tea brewed with milk, spices, and sugar.</p>
                    <p>₹125</p>
                    <button 
                        className={`cart ${isItemInCart("Milk Tea") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Milk Tea",
                            price: "₹125",
                            description: "Traditional Indian-style tea brewed with milk, spices, and sugar.",
                            image: "/Hot_Drinks/Milk Tea.jpg"
                        })}
                    >
                        {isItemInCart("Milk Tea") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hotdrinks;
