import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- додаємо для переходу
import Header from "../components/header/Header"; // <-- якщо хочеш хедер на всіх сторінках

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // для переходу після успіху

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile"); // <-- переходимо на профіль одразу після реєстрації
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Header /> {/* хедер завжди зверху */}
      <main>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </main>
    </>
  );
}
