import { useEffect, useState } from "react";
import "./SwitchDark.scss"

const SwitchDark = () => {
  const [theme, setTheme] = useState('light')
  console.log(theme);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  useEffect(() => {
    if (theme != "light") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");

    }
  }, [theme])
    return (
        <body>
        <div className="wrap ">
          <input onClick={handleClick} type="checkbox" id="trigger" />
          {/* <div className="syrup"></div> */}
          <div className="cake"></div>
          <div className="griddle"></div>
          {/* <div className="butter"></div> */}
          {/* <div className="butter two"></div> */}
        </div>
      </body>
    );
};

export default SwitchDark;