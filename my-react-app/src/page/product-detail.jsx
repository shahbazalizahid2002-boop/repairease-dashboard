import { useState } from "react";

export default function ProductDetail() {
  // Sample data. Replace this with data from your backend later.
  const product = {
    id: 1,
    name: "Sample Product",
    price: 2500,
    description: "This is a sample product description.",
    image: "https://via.placeholder.com/300",
    inStock: true,
  };

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    // Replace this with your cart logic or backend call.
    console.log("Added to cart:", { productId: product.id, quantity });
    setMessage(`${quantity} item(s) added to cart.`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />

        <div style={styles.info}>
          <h1>{product.name}</h1>
          <h2>Rs. {product.price}</h2>
          <p>{product.description}</p>
          <p>{product.inStock ? "In stock" : "Out of stock"}</p>

          <div style={styles.quantity}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              style={styles.qtyButton}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              style={styles.qtyButton}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            style={styles.button}
          >
            Add to Cart
          </button>

          {message && <p style={styles.message}>{message}</p>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  card: {
    display: "flex",
    gap: "24px",
    padding: "24px",
    border: "1px solid #888",
    borderRadius: "8px",
    maxWidth: "700px",
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  qtyButton: {
    width: "32px",
    height: "32px",
    cursor: "pointer",
  },
  button: {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  message: {
    color: "green",
    margin: 0,
  },
};