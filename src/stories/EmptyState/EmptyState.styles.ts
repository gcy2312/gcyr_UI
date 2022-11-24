import styled from "styled-components/macro";

export const Container = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) => isMobile && `width: 100%`};
`;
