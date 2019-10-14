import styled from "styled-components";

export const StyledLegend = styled.div`
  flex: 1;
  margin: 20px 0;
  text-align: left;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  min-width: 400px;
`;

export const SampleFree = styled.div`
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 20px;
  background: #ab47bc;
  color: #fff;
  border-radius: 3px;
  user-select: none;
`;

export const SampleSelected = styled.div`
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 20px;
  background: #ffcd00;
  color: #000;
  border-radius: 3px;
  user-select: none;
`;

export const SampleReserved = styled.div`
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 20px;
  background: #58205f;
  color: #000;
  border-radius: 3px;
  user-select: none;
`;

export const SamplePurchased = styled.div`
  display: inline-block;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 20px;
  background: #191919;
  color: #000;
  border-radius: 3px;
  user-select: none;
`;

export const SampleLabel = styled.span`
  margin-left: 5px;
`;

export const LegendTip = styled.div`
  margin-right: 20px;
  user-select: none;
  font-size: 0.8rem;
`;
