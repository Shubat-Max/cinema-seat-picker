import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  background: #24262c;
  color: #fff;
`;

export const StyledPicker = styled.div`
  background: #24262c;
  flex: 1;
`;

PageWrapper.displayName = "PageWrapper";
