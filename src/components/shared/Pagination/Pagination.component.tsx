import * as Styles from "./Pagination.styles";
import { PageIcon } from "./PageIcon.component";

type Props = {
  totalPage: number;
  currentPage: number;
  onChangePage: (page: number) => () => void;
};

// 現在ページの前後 SIBLING_COUNT ページと最初・最後のページだけ表示し、間は「…」で省略する
const SIBLING_COUNT = 1;

const buildPages = (currentPage: number, totalPage: number): (number | "ellipsis")[] => {
  const pages: (number | "ellipsis")[] = [];

  for (let page = 1; page <= totalPage; page++) {
    const isEdge = page === 1 || page === totalPage;
    const isNearCurrent = Math.abs(page - currentPage) <= SIBLING_COUNT;

    if (isEdge || isNearCurrent) {
      pages.push(page);
    } else if (pages[pages.length - 1] !== "ellipsis") {
      pages.push("ellipsis");
    }
  }

  return pages;
};

export const Pagination = ({ totalPage, currentPage, onChangePage }: Props) => {
  return (
    <Styles.Ol>
      <PageIcon disabled={currentPage === 1} onClick={onChangePage(currentPage - 1)}>
        ←
      </PageIcon>
      {buildPages(currentPage, totalPage).map((page, i) =>
        page === "ellipsis" ? (
          <Styles.EllipsisLi key={`ellipsis-${i}`} />
        ) : (
          <Styles.Li disabled={page === currentPage} key={page} onClick={onChangePage(page)}>
            {page}
          </Styles.Li>
        )
      )}
      <PageIcon disabled={currentPage === totalPage} onClick={onChangePage(currentPage + 1)}>
        →
      </PageIcon>
    </Styles.Ol>
  );
};
