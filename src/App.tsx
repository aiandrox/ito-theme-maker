import React, { useState } from "react";
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

  const selectRandomThemes = () => {
    const randomThemes = [...themes].sort(() => 0.5 - Math.random()).slice(0, 3);
    setSampleThemes(randomThemes);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "5px" }}>
      {selectedTheme ? (
        <div>
          <h2 className="theme-title">{selectedTheme.title}</h2>
          <div className="line-wrapper">
            <div className="text-wrapper">
              <div className="number">1</div>
              <div className="number">100</div>
            </div>
            <div className="number-line" />
            <div className="text-wrapper">
              <div className="label">{selectedTheme.min}</div>
              <div className="label">{selectedTheme.max}</div>
            </div>
          </div>
          <button onClick={() => setSelectedTheme(null)}>戻る</button>
        </div>
      ) : (
        <div>
          <h1>itoお題メーカー</h1>
          {sampleThemes.length > 0 && (
            <>
              <ul>
                {sampleThemes.map((theme, index) => (
                  <li className="theme-box" key={index} onClick={() => setSelectedTheme(theme)}>
                    <div className="theme-title">{theme.title}</div>
                  </li>
                ))}
              </ul>
              <hr />
            </>
          )}
          <button onClick={selectRandomThemes}>シャッフル</button>
          <ul>
            {themes.map((theme, index) => (
              <li className="theme-box" key={index} onClick={() => setSelectedTheme(theme)}>
                <div className="theme-title">{theme.title}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
