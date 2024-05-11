import themes from "../../themes.json";
import { useState } from "react";
import { Theme } from "../../models";
import { ThemeItemComponent } from "./ThemeItem.component";
import * as Styles from "./Top.styles";
import { useNavigate } from "react-router-dom";

export const TopComponent = () => {
  const navigate = useNavigate();
  const [sampleThemes, setSampleThemes] = useState<Theme[]>([]);

  const selectRandomThemes = () => {
    const randomThemes = [...themes].sort(() => 0.5 - Math.random()).slice(0, 3);
    setSampleThemes(randomThemes);
  };

  const onClickTheme = (theme: Theme) => () => {
    navigate(`/themes/${theme.title}`);
  };

  return (
    <>
      <Styles.Title>itoお題メーカー</Styles.Title>
      <Styles.ButtonWrapper>
        <Styles.Button onClick={selectRandomThemes}>シャッフル</Styles.Button>
      </Styles.ButtonWrapper>
      {sampleThemes.length > 0 && (
        <>
          <ul>
            {sampleThemes.map((theme) => (
              <ThemeItemComponent onClickTheme={onClickTheme} theme={theme} />
            ))}
          </ul>
          <Styles.NumberLine />
        </>
      )}
      <ul>
        {themes.map((theme) => (
          <ThemeItemComponent onClickTheme={onClickTheme} theme={theme} />
        ))}
      </ul>
    </>
  );
};
