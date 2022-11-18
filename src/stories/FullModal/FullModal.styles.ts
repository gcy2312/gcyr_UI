import styled from "styled-components/macro";

export const CloseContainer = styled.div<{ showCloseButton: boolean }>`
  ${({ showCloseButton }) => !showCloseButton && "display: none !important;"}
`;

export const BodySection = styled.div<{ scrollBody: boolean }>`
  ${({ scrollBody }) => scrollBody && "max-height: 20rem; overflow-x: hidden;"}
`;

export const BodyContainer = styled.div<{ fullWidth: boolean }>`
  ${({ fullWidth }) =>
    fullWidth && "width: 100%; padding-left: 2rem; padding-right: 2rem"}
`;
