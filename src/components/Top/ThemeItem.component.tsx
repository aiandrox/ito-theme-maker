import { Theme } from "../../models";
import * as Styles from "./ThemeItem.styles";

type Props = {
  onCLickTheme?: (theme: Theme) => () => void;
  theme: Theme;
};

export const ThemeItemComponent = ({ onCLickTheme, theme }: Props) => {
  return (
    <Styles.ThemeBox key={theme.title} onClick={onCLickTheme && onCLickTheme(theme)}>
      <Styles.ThemeTitle>{theme.title}</Styles.ThemeTitle>
    </Styles.ThemeBox>
  );
};
