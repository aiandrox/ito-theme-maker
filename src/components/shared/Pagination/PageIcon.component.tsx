import * as Styles from "./Pagination.styles";

type Props = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const PageIcon = ({ disabled, onClick, children }: Props) => {
  return (
    <Styles.Li disabled={disabled} onClick={disabled ? undefined : onClick}>
      {children}
    </Styles.Li>
  );
};
