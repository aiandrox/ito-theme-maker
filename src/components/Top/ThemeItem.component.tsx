import { Theme } from "../../models";
import * as Styles from "./ThemeItem.styles";

type Props = {
  onClickTheme?: (theme: Theme) => () => void;
  theme: Theme;
};

export const ThemeItemComponent = ({ onClickTheme, theme }: Props) => {
  return (
    <Styles.ThemeBox key={theme.title} onClick={onClickTheme && onClickTheme(theme)}>
      <Styles.ThemeTitle>{theme.title}</Styles.ThemeTitle>
    </Styles.ThemeBox>
  );
};
