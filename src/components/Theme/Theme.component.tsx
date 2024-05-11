import { ComponentProps } from "react";
import { Theme } from "../../models";
import * as Styles from "./Theme.styles";

type Props = {
  theme: Theme;
  onClickBack?: ComponentProps<"button">["onClick"];
};

export const ThemeComponent = ({ theme, onClickBack }: Props) => {
  return (
    <>
      <Styles.ThemeTitle>{theme.title}</Styles.ThemeTitle>
      <Styles.LineWrapper>
        <Styles.TextWrapper>
          <Styles.Number>1</Styles.Number>
          <Styles.Number>100</Styles.Number>
        </Styles.TextWrapper>
        <Styles.NumberLine />
        <Styles.TextWrapper>
          <Styles.Label>{theme.min}</Styles.Label>
          <Styles.Label>{theme.max}</Styles.Label>
        </Styles.TextWrapper>
      </Styles.LineWrapper>
      <Styles.ButtonWrapper>
        <Styles.Button onClick={onClickBack}>戻る</Styles.Button>
      </Styles.ButtonWrapper>
    </>
  );
};
