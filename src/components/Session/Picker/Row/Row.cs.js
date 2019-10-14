import styled from "styled-components";

export const StyledRow = styled.div`
  display: block;
  height: 30px;
  white-space: nowrap;
  margin: 10px;
  border-radius: 2px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const RowContent = styled.div`
  position: relative;
  min-width: 100%;
  width: auto;
`;

export const RowLeftTitle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  text-align: center;
  width: 30px;
  height: 30px;
  margin: 0 20px 0 0;
  color: grey;
  user-select: none;
  float: left;
  font-size: 12px;
`;

export const RowRightTitle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  text-align: center;
  width: 30px;
  height: 30px;
  margin: 0 0 0 20px;
  color: grey;
  user-select: none;
  float: right;
  font-size: 12px;
`;
