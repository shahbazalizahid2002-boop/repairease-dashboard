export default function Home() {
  // Sample data. Replace this with data from your backend later.
  const products = [
    { id: 1, name: "Product One", price: 1500 },
    { id: 2, name: "Product Two", price: 2500 },
    { id: 3, name: "Product Three", price: 3500 },
  ];

  return (
    <div>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>RepairEase</h2>
        <div style={styles.links}>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <h1>Welcome to Home Page</h1>
        <p>Find the products and services you need in one place.</p>
        <a href="/signup" style={styles.button}>
          Get Started
        </a>
      </section>

      <section style={styles.section}>
        <h2>Featured Products</h2>
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <h3>{product.name}</h3>
              <p>Rs. {product.price}</p>
              <a href="/product-detail">View Details</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    borderBottom: "1px solid #888",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  hero: {
    textAlign: "center",
    padding: "60px 20px",
  },
  button: {
    display: "inline-block",
    marginTop: "12px",
    padding: "10px 20px",
    border: "1px solid #888",
    borderRadius: "4px",
    textDecoration: "none",
  },
  section: {
    padding: "20px 32px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    width: "220px",
    padding: "16px",
    border: "1px solid #888",
    borderRadius: "8px",
  },
};