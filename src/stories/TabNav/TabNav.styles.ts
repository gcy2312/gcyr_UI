import styled from 'styled-components/macro'

export const Link = styled.li<{
  active: boolean
  defaultTab: string
}>`
  border-color: transparent;
  border-bottom-width: 2px;
  color: rgb(156 163 175);
  &:hover {
    color: rgb(107 114 128);
  }
  display: inline-flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  ${({ active }) =>
    active &&
    `border-color: #625afa; 
     color: #625afa; 
     &:hover {
    color: #625afa;
  }`}
`
