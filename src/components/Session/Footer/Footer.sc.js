import styled, { css } from "styled-components";

export const StyledFooter = styled.div`
  border-top: 1px solid #696969;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: #24262c;
`;

export const ShortOverall = styled.span`
  display: inline-block;
  position: relative;
  font-weight: 700;
  border-bottom: 1px dashed transparent;
  cursor: default;
  color: #818181;

  ${props =>
    props.enabled &&
    css`
      border-bottom: 1px dashed #fff;
      cursor: pointer;
      color: #fff;
    `}
`;

export const FullOverall = styled.div`
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  background: #fff;
  color: #000;
  min-width: 100%;
  text-align: center;
  padding: 10px 5px;
  margin-bottom: 10px;
  border-radius: 5px;

  ${props =>
    props.enabled &&
    css`
      ${ShortOverall}:hover & {
        display: block;
      }
    `}

  & div {
    display: inline-block;
    text-wrap: none;
  }
`;

export const OrderInfo = styled.div`
  flex: 1;
  margin: 20px 0;
  text-align: right;
  color: #fff;
  min-width: 400px;
`;

export const ActionButton = styled.span`
         margin: 0 10px;
         background: #191919;
         border-bottom: 3px solid #191919;
         color: #fff;
         padding: 6px 12px;
         border-radius: 3px;
         user-select: none;
         cursor: not-allowed;
         text-transform: uppercase;
         font-size: 24px;
         transition: 0.24s;

         ${props =>
           props.enabled &&
           css`
             background: #ab47bc;
             border-color: #573368;
             cursor: pointer;

             &:hover {
               background: #ffcd00;
               border-color: #c67d00;
               color: #000;
             }
           `}
       `;
