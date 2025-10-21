import "./Pastries.css"
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function Pastries() {
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
            <h1 className="menu-heading">Desserts Menu</h1>
            <h2>Cake</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/Pastries/Blueberry Mirror Glaze Mousse Cake.jpeg" alt="Blueberry Mirror Glaze Mousse Cake" className="menu-img" />
                    <h3 className="menu-title">Blueberry Mirror Glaze Mousse Cake</h3>
                    <p className="menu-desc">Delicate mousse with tangy blueberry glaze.</p>
                    <p>₹230</p>
                    <button 
                        className={`cart ${isItemInCart("Blueberry Mirror Glaze Mousse Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Blueberry Mirror Glaze Mousse Cake",
                            price: "₹230",
                            description: "Delicate mousse with tangy blueberry glaze.",
                            image: "/Pastries/Blueberry Mirror Glaze Mousse Cake.jpeg"
                        })}
                    >
                        {isItemInCart("Blueberry Mirror Glaze Mousse Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Honey Lavender Cheesecake.jpeg" alt="Honey Lavender Cheesecake" className="menu-img" />
                    <h3 className="menu-title">Honey Lavender Cheesecake</h3>
                    <p className="menu-desc">Creamy cheesecake with floral notes.</p>
                    <p>₹210</p>
                    <button 
                        className={`cart ${isItemInCart("Honey Lavender Cheesecake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Honey Lavender Cheesecake",
                            price: "₹210",
                            description: "Creamy cheesecake with floral notes.",
                            image: "/Pastries/Honey Lavender Cheesecake.jpeg"
                        })}
                    >
                        {isItemInCart("Honey Lavender Cheesecake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Rich Chocolate Cake with Decadent Frosting Recipe.jpeg" alt="Chocolate Cake" className="menu-img" />
                    <h3 className="menu-title">Chocolate Cake</h3>
                    <p className="menu-desc">Moist chocolate layers with rich frosting.</p>
                    <p>₹190</p>
                    <button 
                        className={`cart ${isItemInCart("Chocolate Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Chocolate Cake",
                            price: "₹190",
                            description: "Moist chocolate layers with rich frosting.",
                            image: "/Pastries/Rich Chocolate Cake with Decadent Frosting Recipe.jpeg"
                        })}
                    >
                        {isItemInCart("Chocolate Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/strawberry cake.jpeg" alt="Strawberry Cake" className="menu-img" />
                    <h3 className="menu-title">Strawberry Cake</h3>
                    <p className="menu-desc">Soft sponge cake topped with berries.</p>
                    <p>₹180</p>
                    <button 
                        className={`cart ${isItemInCart("Strawberry Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Strawberry Cake",
                            price: "₹180",
                            description: "Soft sponge cake topped with berries.",
                            image: "/Pastries/strawberry cake.jpeg"
                        })}
                    >
                        {isItemInCart("Strawberry Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Black Forest Cake.jpg" alt="Black Forest Cake" className="menu-img" />
                    <h3 className="menu-title">Black Forest Cake</h3>
                    <p className="menu-desc">Cherry-filled layers with whipped cream.</p>
                    <p>₹200</p>
                    <button 
                        className={`cart ${isItemInCart("Black Forest Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Black Forest Cake",
                            price: "₹200",
                            description: "Cherry-filled layers with whipped cream.",
                            image: "/Pastries/Black Forest Cake.jpg"
                        })}
                    >
                        {isItemInCart("Black Forest Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Red Velvet Cake.jpeg" alt="Red Velvet Cake" className="menu-img" />
                    <h3 className="menu-title">Red Velvet Cake</h3>
                    <p className="menu-desc">Classic red velvet with cream cheese.</p>
                    <p>₹220</p>
                    <button 
                        className={`cart ${isItemInCart("Red Velvet Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Red Velvet Cake",
                            price: "₹220",
                            description: "Classic red velvet with cream cheese.",
                            image: "/Pastries/Red Velvet Cake.jpeg"
                        })}
                    >
                        {isItemInCart("Red Velvet Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/White Forest Cake.webp" alt="White Forest Cake" className="menu-img" />
                    <h3 className="menu-title">White Forest Cake</h3>
                    <p className="menu-desc">Vanilla sponge with white chocolate.</p>
                    <p>₹210</p>
                    <button 
                        className={`cart ${isItemInCart("White Forest Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "White Forest Cake",
                            price: "₹210",
                            description: "Vanilla sponge with white chocolate.",
                            image: "/Pastries/White Forest Cake.webp"
                        })}
                    >
                        {isItemInCart("White Forest Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Creamy Strawberry Swirl Cheesecake Recipe from Scratch - Kitchen Scroll.jpeg" alt="Strawberry Swirl Cheesecake" className="menu-img" />
                    <h3 className="menu-title">Strawberry Swirl Cheesecake</h3>
                    <p className="menu-desc">Rich cheesecake with strawberry swirls. </p>
                    <p>₹230</p>
                    <button 
                        className={`cart ${isItemInCart("Strawberry Swirl Cheesecake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Strawberry Swirl Cheesecake",
                            price: "₹230",
                            description: "Rich cheesecake with strawberry swirls.",
                            image: "/Pastries/Creamy Strawberry Swirl Cheesecake Recipe from Scratch - Kitchen Scroll.jpeg"
                        })}
                    >
                        {isItemInCart("Strawberry Swirl Cheesecake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/The Only Coconut Chiffon Cake Recipe You Need.jpeg" alt="Coconut Chiffon Cake" className="menu-img" />
                    <h3 className="menu-title">Coconut Chiffon Cake</h3>
                    <p className="menu-desc">Airy cake with coconut flavor. </p>
                    <p>₹200</p>
                    <button 
                        className={`cart ${isItemInCart("Coconut Chiffon Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Coconut Chiffon Cake",
                            price: "₹200",
                            description: "Airy cake with coconut flavor.",
                            image: "/Pastries/The Only Coconut Chiffon Cake Recipe You Need.jpeg"
                        })}
                    >
                        {isItemInCart("Coconut Chiffon Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Vanilla Cake.jpg" alt="Vanilla Cake" className="menu-img" />
                    <h3 className="menu-title">Vanilla Cake</h3>
                    <p className="menu-desc">Classic vanilla with fruity topping. </p>
                    <p>₹190</p>
                    <button 
                        className={`cart ${isItemInCart("Vanilla Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Vanilla Cake",
                            price: "₹190",
                            description: "Classic vanilla with fruity topping.",
                            image: "/Pastries/Vanilla Cake.jpg"
                        })}
                    >
                        {isItemInCart("Vanilla Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Mango cram cake.jpeg" alt="Mango Cream Cake" className="menu-img" />
                    <h3 className="menu-title">Mango Cream Cake</h3>
                    <p className="menu-desc">Fresh mango layers with cream. </p>
                    <p>₹210</p>
                    <button 
                        className={`cart ${isItemInCart("Mango Cream Cake") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Mango Cream Cake",
                            price: "₹210",
                            description: "Fresh mango layers with cream.",
                            image: "/Pastries/Mango cram cake.jpeg"
                        })}
                    >
                        {isItemInCart("Mango Cream Cake") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Lemon Lavender Cupcakes.jpeg" alt="Lemon Lavender Cupcakes" className="menu-img" />
                    <h3 className="menu-title">Lemon Lavender Cupcakes</h3>
                    <p className="menu-desc">Citrusy cupcakes with lavender hint. </p>
                    <p>₹150</p>
                    <button 
                        className={`cart ${isItemInCart("Lemon Lavender Cupcakes") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Lemon Lavender Cupcakes",
                            price: "₹150",
                            description: "Citrusy cupcakes with lavender hint.",
                            image: "/Pastries/Lemon Lavender Cupcakes.jpeg"
                        })}
                    >
                        {isItemInCart("Lemon Lavender Cupcakes") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>

            <h2>Cookies</h2>
            <div className="menu-grid">
                <div className="menu-card">
                    <img src="/Pastries/Best Chocolate Chip Cookies Recipe for Soft and Chewy Treats.jpeg" alt="Chocolate Chip Cookies" className="menu-img" />
                    <h3 className="menu-title">Chocolate Chip Cookies</h3>
                    <p className="menu-desc">Crispy edge, gooey center. </p>
                    <p>₹80</p>
                    <button 
                        className={`cart ${isItemInCart("Chocolate Chip Cookies") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Chocolate Chip Cookies",
                            price: "₹80",
                            description: "Crispy edge, gooey center.",
                            image: "/Pastries/Best Chocolate Chip Cookies Recipe for Soft and Chewy Treats.jpeg"
                        })}
                    >
                        {isItemInCart("Chocolate Chip Cookies") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Heart-Shaped Thumbprint Cookies.jpeg" alt="Thumbprint Cookies" className="menu-img" />
                    <h3 className="menu-title">Thumbprint Cookies</h3>
                    <p className="menu-desc">Jam-filled buttery delights. </p>
                    <p>₹90</p>
                    <button 
                        className={`cart ${isItemInCart("Thumbprint Cookies") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Thumbprint Cookies",
                            price: "₹90",
                            description: "Jam-filled buttery delights.",
                            image: "/Pastries/Heart-Shaped Thumbprint Cookies.jpeg"
                        })}
                    >
                        {isItemInCart("Thumbprint Cookies") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Lemon Cookies with Lemon Cream.jpeg" alt="Lemon Cookies" className="menu-img" />
                    <h3 className="menu-title">Lemon Cookies</h3>
                    <p className="menu-desc">Zesty and soft citrus cookies. </p>
                    <p>₹85</p>
                    <button 
                        className={`cart ${isItemInCart("Lemon Cookies") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Lemon Cookies",
                            price: "₹85",
                            description: "Zesty and soft citrus cookies.",
                            image: "/Pastries/Lemon Cookies with Lemon Cream.jpeg"
                        })}
                    >
                        {isItemInCart("Lemon Cookies") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Raspberry Swirl Cookies.jpeg" alt="Raspberry Swirl Cookies" className="menu-img" />
                    <h3 className="menu-title">Raspberry Swirl Cookies</h3>
                    <p className="menu-desc">Sweet and tangy twist. </p>
                    <p>₹90</p>
                    <button 
                        className={`cart ${isItemInCart("Raspberry Swirl Cookies") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Raspberry Swirl Cookies",
                            price: "₹90",
                            description: "Sweet and tangy twist.",
                            image: "/Pastries/Raspberry Swirl Cookies.jpeg"
                        })}
                    >
                        {isItemInCart("Raspberry Swirl Cookies") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Chocolate Macarons.jpeg" alt="Chocolate Macarons" className="menu-img" />
                    <h3 className="menu-title">Chocolate Macarons</h3>
                    <p className="menu-desc">Crispy shells, fudgy inside. </p>
                    <p>₹120</p>
                    <button 
                        className={`cart ${isItemInCart("Chocolate Macarons") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Chocolate Macarons",
                            price: "₹90",
                            description: "Crispy shells, fudgy inside.",
                            image: "/Pastries/Chocolate Macarons.jpeg"
                        })}
                    >
                        {isItemInCart("Chocolate Macarons") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Macaron lovers, you NEED to see this!.jpeg" alt="Macaron" className="menu-img" />
                    <h3 className="menu-title">Macaron</h3>
                    <p className="menu-desc">Assorted flavors with soft centers. </p>
                    <p>₹110</p>
                    <button 
                        className={`cart ${isItemInCart("Macaron") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Macaron",
                            price: "₹110",
                            description: "Assorted flavors with soft centers.",
                            image: "/Pastries/Macaron lovers, you NEED to see this!.jpeg"
                        })}
                    >
                        {isItemInCart("Macaron") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Butter Cookies.jpeg" alt="Butter Cookies" className="menu-img" />
                    <h3 className="menu-title">Butter Cookies</h3>
                    <p className="menu-desc">Rich, buttery crunch. </p>
                    <p>₹75</p>
                    <button 
                        className={`cart ${isItemInCart("Butter Cookies") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Butter Cookies",
                            price: "₹75",
                            description: "Rich, buttery crunch.",
                            image: "/Pastries/Butter Cookies.jpeg"
                        })}
                    >
                        {isItemInCart("Butter Cookies") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Golden Brown Almond Cookies_ Soft, Flaky, and Perfectly Paired with a Cup of Coffee.jpeg" alt="Almond Cookies" className="menu-img" />
                    <h3 className="menu-title">Golden Brown Almond Cookies</h3>
                    <p className="menu-desc">Crunchy with nutty flavor. </p>
                    <p>₹95</p>
                    <button 
                        className={`cart ${isItemInCart("Golden Brown Almond Cookies") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Golden Brown Almond Cookies",
                            price: "₹95",
                            description: "Crunchy with nutty flavor.",
                            image: "/Pastries/Golden Brown Almond Cookies_ Soft, Flaky, and Perfectly Paired with a Cup of Coffee.jpeg"
                        })}
                    >
                        {isItemInCart("Golden Brown Almond Cookies") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>

            <h2>Sweets</h2>
            <div className="menu-grid">
                <div className="menu-card">t
                    <img src="/Pastries/Buttery Ham and Cheese Croissant.jpeg" alt="Cheese Croissant" className="menu-img" />
                    <h3 className="menu-title">Cheese Croissant</h3>
                    <p className="menu-desc">Flaky croissant filled with cheese. </p>
                    <p>₹140</p>
                    <button 
                        className={`cart ${isItemInCart("Cheese Croissant") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Cheese Croissant",
                            price: "₹140",
                            description: "Flaky croissant filled with cheese.",
                            image: "/Pastries/Buttery Ham and Cheese Croissant.jpeg"
                        })}
                    >
                        {isItemInCart("Cheese Croissant") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Puding Buah Naga_Dragon Fruit Pudding.jpeg" alt="Dragon Fruit Pudding" className="menu-img" />
                    <h3 className="menu-title">Dragon Fruit Pudding</h3>
                    <p className="menu-desc">Fresh and fruity chilled dessert. </p>
                    <p>₹130</p>
                    <button 
                        className={`cart ${isItemInCart("Dragon Fruit Pudding") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Dragon Fruit Pudding",
                            price: "₹130",
                            description: "Fresh and fruity chilled dessert.",
                            image: "/Pastries/Puding Buah Naga_Dragon Fruit Pudding.jpeg"
                        })}
                    >
                        {isItemInCart("Dragon Fruit Pudding") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Homemade Vegan Strawberry Jelly.jpeg" alt="Strawberry Jelly" className="menu-img" />
                    <h3 className="menu-title">Strawberry Jelly</h3>
                    <p className="menu-desc">Light and fruity jelly treat. </p>
                    <p>₹90</p>
                    <button 
                        className={`cart ${isItemInCart("Strawberry Jelly") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Strawberry Jelly",
                            price: "₹90",
                            description: "Light and fruity jelly treat.",
                            image: "/Pastries/Homemade Vegan Strawberry Jelly.jpeg"
                        })}
                    >
                        {isItemInCart("Strawberry Jelly") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>
                <div className="menu-card">
                    <img src="/Pastries/Tofu Pudding (Blancmange) (Video) 豆腐プリン.jpeg" alt="Tofu Pudding" className="menu-img" />
                    <h3 className="menu-title">Tofu Pudding</h3>
                    <p className="menu-desc">Silky tofu-based dessert. </p>
                    <p>₹100</p>
                    <button 
                        className={`cart ${isItemInCart("Tofu Pudding") ? "in-cart" : ""}`}
                        onClick={() => handleButtonClick({
                            title: "Tofu Pudding",
                            price: "₹100",
                            description: "Silky tofu-based dessert.",
                            image: "/Pastries/Tofu Pudding (Blancmange) (Video) 豆腐プリン.jpeg"
                        })}
                    >
                        {isItemInCart("Tofu Pudding") ? "View Cart" : "Add to Cart"}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Pastries
