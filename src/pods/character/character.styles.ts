import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const detail = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const img = css`
  width: 400px;
`;

export const status = css`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

export const status__icon = css`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const section = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
`;

export const text__gray = css`
  color: gray;
`;
