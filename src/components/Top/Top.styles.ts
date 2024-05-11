import styled from "@emotion/styled";
import { color } from "../../color";

export const Title = styled.h1`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  border: 2px solid ${color.red};
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${color.white};
  color: ${color.lightBlue};
  cursor: pointer;
  font-weight: bold;
`;

export const NumberLine = styled.div`
  border-bottom: dotted 4px ${color.yellow};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
