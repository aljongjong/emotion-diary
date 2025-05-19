import "./FAB.css";
import { useEffect, useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const FAB = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    document.body.className = storedTheme || "day";
  }, []);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "day"
  );

  const onClickTheme = (e) => {
    const value = e.target.value;

    setTheme(value);
    document.body.className = value;
    localStorage.setItem("theme", e.target.value);
  };

  return (
    <div className="floating-buttons">
      <button
        className={`fab fab_${theme === "day" ? "night" : "day"}`}
        onClick={onClickTheme}
        value={theme === "day" ? "night" : "day"}
      >
        {theme === "day" ? <IoIosSunny /> : <IoIosMoon />}
      </button>
    </div>
  );
};

export default FAB;
