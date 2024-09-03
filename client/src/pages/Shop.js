import React, { useState } from "react";
import Product from "../components/Product";
import { products } from "../data";
import "../css/Shop.css";
import { useCart } from "../context/CartContext";
import Modal from "../components/Modal"; // Import the Modal component

function Shop({ selectedCategory, searchTerm }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { addToCart } = useCart();

  // Filter products based on selected category and search term
  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleAddToCart = (product) => {
    if (product.isStocked) {
      addToCart(product);
    } else {
      setModalMessage(`The product ${product.name} is out of stock.`);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="shop">
      <h2>Our Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3>Out of Stock</h3>
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}

export default Shop;
