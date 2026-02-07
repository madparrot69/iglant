// src/components/Header.jsx
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/AuthContext";
import ThemeSwitcher from "../theme/ThemeSwitcher";

import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header>
      <div className="logo" onClick={() => navigate("/")}>
        iglant.ai
      </div>
      <div className="buttons">
        {!user ? (
          <>
            <button className="_dark-btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="_light-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/profile")}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
      <ThemeSwitcher />
    </header>
  );
}
