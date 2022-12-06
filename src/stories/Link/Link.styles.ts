import styled from 'styled-components/macro'

export const DefaultLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #625afa;
  &:hover {
    color: rgb(55 65 81);
  }
`
export const IconLink = styled(DefaultLink)`
  vertical-align: baseline;
`

export const BtnLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  background-color: #f2ebff;
  color: #513dd9;
  padding-left: 0.675rem;
  padding-right: 0.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  border-radius: 9999px;
  &:hover {
    color: white;
    background-color: #625afa;
  }
`
