import { ArrowRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

import * as S from './Link.styles'

const Link = (props: LinkProps): JSX.Element => {
  const { id, type, label, href, icon } = props

  let StyledLink

  switch (type) {
    case 'icon':
      StyledLink = S.IconLink
      break
    case 'button':
      StyledLink = S.BtnLink
      break
    default:
      StyledLink = S.DefaultLink
  }

  return (
    <StyledLink id={id} href={href}>
      {icon && <span className="mr-0.5 h-5 w-5 mb-0.5">{icon}</span>}
      {label}
      {props.arrow && <ArrowRightIcon className="h-5 w-5 ml-0.5" />}
    </StyledLink>
  )
}

export interface LinkProps {
  id: string
  type: 'icon' | 'button' | 'default'
  label: string
  href: string
  icon?: React.ReactNode
  arrow?: boolean
}

Link.defaultProps = {}

export default Link
