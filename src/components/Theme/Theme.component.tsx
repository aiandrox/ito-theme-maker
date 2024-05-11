import { ComponentProps } from "react";
import { Theme } from "../../models";

type Props = {
  theme: Theme;
  onClickBack?: ComponentProps<"button">["onClick"];
};

export const ThemeComponent = ({ theme, onClickBack }: Props) => {
  return (
    <div>
      <h2 className="theme-title">{theme.title}</h2>
      <div className="line-wrapper">
        <div className="text-wrapper">
          <div className="number">1</div>
          <div className="number">100</div>
        </div>
        <div className="number-line" />
        <div className="text-wrapper">
          <div className="label">{theme.min}</div>
          <div className="label">{theme.max}</div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button" onClick={onClickBack}>
          戻る
        </button>
      </div>
    </div>
  );
};
