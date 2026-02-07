// src/pages/Profile.jsx
import Header from "../components/header/Header";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <main>
        <h1>Profile</h1>
        <p>Email: {user?.email}</p>

        <h1></h1>
      </main>
    </>
  );
}
