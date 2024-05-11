import * as Styles from "./Pagination.styles";
import { PageIcon } from "./PageIcon.component";

type Props = {
  totalPage: number;
  currentPage: number;
  onChangePage: (page: number) => () => void;
};

export const Pagination = ({ totalPage, currentPage, onChangePage }: Props) => {
  return (
    <Styles.Ol>
      <PageIcon disabled={currentPage === 1} onClick={onChangePage(currentPage - 1)}>
        ←
      </PageIcon>
      {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
        <Styles.Li disabled={page === currentPage} key={page} onClick={onChangePage(page)}>
          {page}
        </Styles.Li>
      ))}
      <PageIcon disabled={currentPage === totalPage} onClick={onChangePage(currentPage + 1)}>
        →
      </PageIcon>
    </Styles.Ol>
  );
};
