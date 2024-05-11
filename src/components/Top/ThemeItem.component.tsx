import { Theme } from "../../models";

type Props = {
  onCLickTheme?: (theme: Theme) => () => void;
  theme: Theme;
};

export const ThemeItemComponent = ({ onCLickTheme, theme }: Props) => {
  return (
    <li className="theme-box" key={theme.title} onClick={onCLickTheme && onCLickTheme(theme)}>
      <div className="theme-title">{theme.title}</div>
    </li>
  );
};
