import * as Styles from "./Pagination.styles";

type Props = {
  totalPage: number;
  currentPage: number;
  onChangePage: (page: number) => () => void;
};

export const Pagination = ({ totalPage, currentPage, onChangePage }: Props) => {
  return (
    <Styles.Ol>
      {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
        <Styles.Li disabled={page === currentPage} key={page} onClick={onChangePage(page)}>
          {page}
        </Styles.Li>
      ))}
    </Styles.Ol>
  );
};
