import styled from "@emotion/styled";
import { color } from "../../../color";
import { css } from "@emotion/react";

export const Ol = styled.ol`
  display: flex;
  gap: 8px;
  padding-inline-start: 0;
`;

const PaginationButton = ({ disabled }: { disabled?: boolean }) => css`
  ${disabled
    ? css`
        cursor: default;
        color: ${color.white};
        border: 1px solid ${color.white};
      `
    : css`
        cursor: pointer;
        color: ${color.lightBlue};
        background-color: ${color.white};
      `}
`;

export const Li = styled.li`
  ${PaginationButton}

  width: 35px;
  height: 35px;
  border-radius: 4px;

  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EllipsisLi = styled.li`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    display: flex;
    justify-content: center;
    content: "…";
    width: 20px;
    height: 20px;
  }
`;
