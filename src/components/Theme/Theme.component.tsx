import themes from "../../themes.json";
import { Theme } from "../../models";
import * as Styles from "./Theme.styles";
import { NotFoundComponent } from "../shared/NotFound/NotFound.component";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

export const ThemeComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const theme: Theme | undefined = themes.find((theme) => theme.id === Number(id));
  const onClickBack = () => {
    // 一覧で開いていたページに戻す
    const page = searchParams.get("page");
    navigate(page ? `/?page=${page}` : "/");
  };

  return (
    <>
      {theme ? (
        <Styles.Container>
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
        </Styles.Container>
      ) : (
        <NotFoundComponent />
      )}
    </>
  );
};
