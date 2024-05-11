import { ComponentProps } from "react";
import { Theme } from "../../models";

type Props = {
  selectRandomThemes?: ComponentProps<"button">["onClick"];
  onCLickTheme?: (theme: Theme) => () => void;
  sampleThemes: Theme[];
  themes: Theme[];
};

export const TopComponent = ({ selectRandomThemes, onCLickTheme, sampleThemes, themes }: Props) => {
  return (
    <div>
      <h1 className="title">itoお題メーカー</h1>
      <div className="button-wrapper">
        <button className="button" onClick={selectRandomThemes}>
          シャッフル
        </button>
      </div>
      {sampleThemes.length > 0 && (
        <>
          <ul>
            {sampleThemes.map((theme, index) => (
              <li className="theme-box" key={index} onClick={onCLickTheme && onCLickTheme(theme)}>
                <div className="theme-title">{theme.title}</div>
              </li>
            ))}
          </ul>
          <div className="number-line" />
        </>
      )}
      <ul>
        {themes.map((theme, index) => (
          <li className="theme-box" key={index} onClick={onCLickTheme && onCLickTheme(theme)}>
            <div className="theme-title">{theme.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
