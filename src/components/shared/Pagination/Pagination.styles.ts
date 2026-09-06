import styled from "@emotion/styled";
import { color } from "../../../color";
import { css } from "@emotion/react";

export const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding-inline-start: 0;

  @media (max-width: 420px) {
    gap: 6px;
  }
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

const cell = css`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;

  @media (max-width: 420px) {
    width: 30px;
    height: 30px;
  }
`;

export const Li = styled.li`
  ${PaginationButton}
  ${cell}

  border-radius: 4px;
  font-size: 13px;
`;

export const EllipsisLi = styled.li`
  ${cell}

  color: ${color.white};

  ::before {
    content: "…";
  }
`;
