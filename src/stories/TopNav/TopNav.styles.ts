import styled from 'styled-components/macro'

export const NavLink = styled.a<{
  active: boolean
  defaultTab: string
}>`
  background-color: transparent;
  color: rgb(75 85 99);
  margin-bottom: 0.5rem;
  &:hover {
    background-color: rgb(229 231 235);
  }
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${({ active }) =>
    active &&
    `background-color: #625afa;
     font-weight: 400; 
     color: white; 
     &:hover {
    background-color: #625afa;
  }`}
`
