import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Replace this with your backend call, for example:
    // fetch("http://localhost:5000/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    console.log("Login:", { email, password });
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1>Login</h1>

        {error && <p style={styles.error}>{error}</p>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "320px",
    padding: "24px",
    border: "1px solid #888",
    borderRadius: "8px",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #888",
  },
  button: {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    margin: 0,
  },
};