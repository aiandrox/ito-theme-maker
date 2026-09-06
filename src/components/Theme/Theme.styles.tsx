import styled from "@emotion/styled";
import { color } from "../../color";

// App のラッパー(padding: 5px)を差し引いて画面いっぱいに広げる
export const Container = styled.div`
  min-height: calc(100dvh - 10px);
  display: flex;
  flex-direction: column;
`;

export const ThemeTitle = styled.h2`
  white-space: pre-wrap;
  text-align: center;
`;

export const LineWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 8px;
`;

export const ThemeBox = styled.button`
  border: 2px solid #ff425f;
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #ffffff;
  color: #008dbf;
  cursor: pointer;
  font-weight: bold;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumberLine = styled.div`
  border-bottom: dotted 4px ${color.yellow};
`;

export const Number = styled.div`
  font-size: 12px;
  text-align: center;
  color: ${color.yellow};
`;

export const Label = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 12px;
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
