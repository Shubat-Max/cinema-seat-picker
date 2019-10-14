import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  perspective: 1000px;
`;

export const Hall = styled.div`
  display: block;
  transform: rotateX(20deg);
`;

export const Screen = styled.div`
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  width: 400px;
  transform: rotateX(-50deg);
  color: #2d2d2d;
  user-select: none;
`;
