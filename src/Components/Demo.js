import React, { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarktheme, setIsDarkTheme] = useState(true);
  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDarktheme && " bg-gray-900 text-blue-700")
      }
    >
      <div>
        <button
          className="m-10 px-2 py-1 bg-blue-600 rounded-lg  "
          onClick={() => setIsDarkTheme(!isDarktheme)}
        >
          Dark
        </button>
      </div>

      <div>
        <input
          className="border border-black w-full px-3"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Demo;
