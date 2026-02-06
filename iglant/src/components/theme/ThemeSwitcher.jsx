export default function ThemeSwitcher() {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("neon")}>+vibe</button>
      <button onClick={() => setTheme("soft")}>lo-fi</button>
      <button onClick={() => setTheme("pink")}>pikmi</button>
    </div>
  );
}
