import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data";
import "../css/ProductDetail.css"; // Ensure this file includes the styles
import Modal from "../components/Modal"; // Import the Modal component

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    console.error("Product not found");
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log("Add to Cart button clicked");
    console.log("Product isStocked:", product.isStocked);
    if (product.isStocked) {
      addToCart(product);
    } else {
      console.log("Opening modal");
      setIsModalOpen(true); // Open the modal if out of stock
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>
        <strong>Price:</strong> {product.price} DZD
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> This is a detailed description of{" "}
        {product.name}.
      </p>
      <p>
        <strong>Stock Status:</strong>{" "}
        {product.isStocked ? "In Stock" : "Out of Stock"}
      </p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button
        className="continue-shopping-button"
        onClick={() => window.history.back()}
      >
        Continue Shopping
      </button>

      {/* Use the Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3>Out of Stock</h3>
        <p>
          This product is currently out of stock and cannot be added to the
          cart.
        </p>
      </Modal>
    </div>
  );
}

export default ProductDetail;
