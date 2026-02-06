// src/components/Header.jsx
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <div className="logo" onClick={() => navigate("/")}>
        iglant.ai
      </div>
      <div className="buttons">
        {!user ? (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/profile")}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
}
