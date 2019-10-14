import React from "react";
import {
  LegendTip,
  SampleFree,
  SamplePurchased,
  SampleReserved,
  SampleSelected,
  StyledLegend,
  SampleLabel
} from "./Legend.sc";

const Legend = () => {
  return (
    <StyledLegend>
      <LegendTip>
        <SampleFree>1</SampleFree>
        <SampleLabel>Free</SampleLabel>
      </LegendTip>
      <LegendTip>
        <SampleSelected>1</SampleSelected>
        <SampleLabel>Selected</SampleLabel>
      </LegendTip>
      <LegendTip>
        <SampleReserved>1</SampleReserved>
        <SampleLabel>Reserved</SampleLabel>
      </LegendTip>
      <LegendTip>
        <SamplePurchased>1</SamplePurchased>
        <SampleLabel>Purchased</SampleLabel>
      </LegendTip>
    </StyledLegend>
  );
};

export default Legend;
