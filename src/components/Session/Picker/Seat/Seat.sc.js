import styled, { css } from "styled-components";

export const StyledSeat = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  line-height: 30px;
  width: calc(
    30px +
      ${props => (props.span > 1 ? (props.span - 1) * 40 + "px" : 0 + "px")}
  );
  height: 30px;
  margin: 0 5px 0 calc(5px + 40px * ${props => (props.skip ? props.skip : 0)});
  border-radius: 3px;
  background: #ab47bc;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
  transition: 0.24s;
  color: #ffffff;

  ${props =>
    !(props.isReserved || props.isSelected || props.isPurchased) &&
    css`
      &:hover {
        background: #ffcd00;
        color: black;
      }
    `}
  
  ${props =>
    props.isSelected &&
    css`
      background: #ffcd00;
      color: #000;
    `}

  ${props =>
    props.isReserved &&
    css`
      background: #58205f;
      color: #000;
      cursor: default;
    `}  

  ${props =>
    props.isPurchased &&
    css`
      background: #191919;
      color: #000;
      cursor: default;
    `}
`;

export const Tip = styled.div`
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  background: #fff;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);

  ${StyledSeat}:hover & {
    display: block;
  }

  &:hover {
    display: none;
  }
`;

export const TipRow = styled.div`
  display: inline-block;
  line-height: 10px;
`;

export const TipSeat = styled.div`
  display: inline-block;
  line-height: 10px;
`;

export const TipPrice = styled.div`
  font-weight: 700;
`;

//isReserved - #47204e
//isReserved - #47204e
