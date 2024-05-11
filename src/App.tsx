import React, { useState } from "react";
import themes from "./themes.json";
import { Theme } from "./models";
import { TopComponent } from "./components/Top/Top.component";
import { ThemeComponent } from "./components/Theme/Theme.component";

const App: React.FC = () => {
  const [sampleThemes, setSampleThemes] = useState<Theme[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const selectRandomThemes = () => {
    const randomThemes = [...themes].sort(() => 0.5 - Math.random()).slice(0, 3);
    setSampleThemes(randomThemes);
  };

  const onCLickTheme = (theme: Theme) => () => {
    setSelectedTheme(theme);
  };

  const onClickBack = () => {
    setSelectedTheme(null);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "5px" }}>
      {selectedTheme ? (
        <ThemeComponent theme={selectedTheme} onClickBack={onClickBack} />
      ) : (
        <TopComponent
          sampleThemes={sampleThemes}
          themes={themes}
          selectRandomThemes={selectRandomThemes}
          onCLickTheme={onCLickTheme}
        />
      )}
    </div>
  );
};

export default App;
