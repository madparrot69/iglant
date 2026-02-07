import "./ThemeSwitcher.scss";

export default function ThemeSwitcher() {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="themeContainer">
      <button className="dark" onClick={() => setTheme("dark")}>
        dark
      </button>
      <button className="light" onClick={() => setTheme("light")}>
        light
      </button>
      <button className="neon" onClick={() => setTheme("neon")}>
        +vibe
      </button>
      <button className="soft" onClick={() => setTheme("soft")}>
        lo-fi
      </button>
      <button className="pink" onClick={() => setTheme("pink")}>
        pikmi
      </button>
    </div>
  );
}
