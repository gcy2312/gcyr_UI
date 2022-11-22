import styled from "styled-components/macro";

export const BasicButton = styled.button<{
  isLoading?: boolean;
  iconOnly?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  cursor: pointer;
  background-color: #625afa;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.275rem;
  padding-bottom: 0.275rem;
  border-radius: 0.375rem;
  color: white;
  border-width: 1px;
  border-color: #625afa;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.2))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));

  ${({ isLoading }) => isLoading && `opacity: 0.7; cursor: default`}
  ${({ iconOnly }) =>
    iconOnly === true &&
    `padding-left: 0.5rem padding-top: 0.375rem; padding-bottom: 0.375rem; padding-right: 0.125rem`};
`;

export const ErrorButton = styled(BasicButton)`
  background-color: red;
  border-color: red;
`;

export const SecondaryButton = styled(BasicButton)`
  background-color: white;
  border-color: rgb(209 213 219);
  color: rgb(75 85 99);
  &:hover {
    opacity: 0.85;
  }
`;
