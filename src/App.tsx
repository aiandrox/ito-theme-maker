import React, { useState, useEffect } from "react";
import themes from "./themes.json";
import "./App.css";

type ThemeType = {
  title: string;
  max: string;
  min: string;
};

const App: React.FC = () => {
  const [sampleThemes, setSampleThemes] = useState<ThemeType[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<ThemeType | null>(null);

  useEffect(() => {
    const randomThemes = themes.sort(() => 0.5 - Math.random()).slice(0, 3);
    setSampleThemes(randomThemes);
  }, []);

  const handleClick = (theme: ThemeType) => {
    setSelectedTheme(theme);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {selectedTheme ? (
        <div>
          <h1>{selectedTheme.title}</h1>
          <p>
            Max: {selectedTheme.max}, Min: {selectedTheme.min}
          </p>
          <button onClick={() => setSelectedTheme(null)}>戻る</button>
        </div>
      ) : (
        <div>
          <h1>お題</h1>
          <ul>
            {sampleThemes.map((theme, index) => (
              <li key={index} onClick={() => handleClick(theme)}>
                {theme.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
