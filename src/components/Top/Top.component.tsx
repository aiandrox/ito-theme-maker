import themes from "../../themes.json";
import { useEffect, useState } from "react";
import { Theme, PAGE_SIZE } from "../../models";
import { ThemeItemComponent } from "./ThemeItem.component";
import * as Styles from "./Top.styles";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Pagination } from "../shared/Pagination/Pagination.component";

export const TopComponent = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const [sampleThemes, setSampleThemes] = useState<Theme[]>([]);
  const [paginatedThemes, setPaginatedThemes] = useState<Theme[]>([]);
  const [page, setPage] = useState(1);

  const query = new URLSearchParams(search);
  const queryPage = Number(query.get("page"));

  useEffect(() => {
    setPage(Number(queryPage) || 1);
  }, [queryPage]);

  useEffect(() => {
    const start = PAGE_SIZE * (page - 1);
    const end = start + PAGE_SIZE;
    const slicedThemes = themes.slice(start, end);
    setPaginatedThemes(slicedThemes);
  }, [page]);

  const selectRandomThemes = () => {
    const randomThemes = [...themes].sort(() => 0.5 - Math.random()).slice(0, 3);
    setSampleThemes(randomThemes);
  };

  const onClickTheme = (theme: Theme) => () => {
    navigate(`/themes/${theme.id}`);
  };

  const onChangePage = (page: number) => () => {
    // NOTE: 下のqueryを無視している
    navigate(`?page=${page}`);
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
        {paginatedThemes.map((theme) => (
          <ThemeItemComponent key={theme.id} onClickTheme={onClickTheme} theme={theme} />
        ))}
      </ul>
      <Styles.PaginationWrapper>
        <Pagination totalPage={Math.ceil(themes.length / PAGE_SIZE)} currentPage={page} onChangePage={onChangePage} />
      </Styles.PaginationWrapper>
    </>
  );
};
