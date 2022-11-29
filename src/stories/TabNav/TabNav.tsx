import { array } from 'prop-types'
import React, { useState } from 'react'

import * as S from './TabNav.styles'

const TabNav = (props: TabNavProps): JSX.Element => {
  const { links, handleClick, defaultTab } = props

  const [active, setActive] = useState(defaultTab)

  const activate = (text: string) => {
    setActive(text)
  }

  return (
    <ul className="flex w-full mt-6 border-b border-gray-200 mb-4 items-center space-x-6">
      {links.map((l, i) => (
        <S.Link
          key={i}
          id={l.id}
          active={active === l.text}
          onClick={() => {
            activate(l.text)
            handleClick && handleClick(l.text)
          }}
          defaultTab={defaultTab}
        >
          {l.Icon && <span className="h-5 w-5 mr-1">{l.Icon}</span>}
          {l.text}
        </S.Link>
      ))}
    </ul>
  )
}

export type Link = {
  id: string
  href?: string
  text: string
  Icon?: React.ReactNode
}

export interface TabNavProps {
  links: Link[]
  handleClick?: (text: string) => React.MouseEventHandler<HTMLLIElement> | void
  defaultTab: string
}

export default TabNav
