import { ComponentProps } from "react";
import { Theme } from "../../models";
import { ThemeItemComponent } from "./ThemeItem.component";
import * as Styles from "./Top.styles";

type Props = {
  selectRandomThemes?: ComponentProps<"button">["onClick"];
  onCLickTheme?: (theme: Theme) => () => void;
  sampleThemes: Theme[];
  themes: Theme[];
};

export const TopComponent = ({ selectRandomThemes, onCLickTheme, sampleThemes, themes }: Props) => {
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
              <ThemeItemComponent onCLickTheme={onCLickTheme} theme={theme} />
            ))}
          </ul>
          <Styles.NumberLine />
        </>
      )}
      <ul>
        {themes.map((theme) => (
          <ThemeItemComponent onCLickTheme={onCLickTheme} theme={theme} />
        ))}
      </ul>
    </>
  );
};
