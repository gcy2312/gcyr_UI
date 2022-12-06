import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import * as S from './TopNav.styles'

const TopNav = (props: TopNavProps): JSX.Element => {
  const { links, defaultLink } = props

  const [active, setActive] = useState(defaultLink)

  const activate = (text: string) => {
    setActive(text)
  }

  return (
    <ul className="flex w-full mt-6 border-b border-gray-200 mb-4 items-center space-x-2">
      {links.map((l, i) =>
        l.dropdown ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full items-center align-middle rounded-full mb-2 leading-4 bg-transparent px-2.5 py-1 text-sm font-medium text-gray-600 transition hover:bg-gray-200 focus:outline-none">
                {l.text}
                <ChevronDownIcon
                  className="-mr-1.5 ml-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {l.dropdownLinks}
            </Transition>
          </Menu>
        ) : (
          <S.NavLink
            key={i}
            id={l.id}
            href={l.href}
            active={active === l.text}
            onClick={() => {
              activate(l.text)
            }}
            defaultLink={defaultLink}
          >
            {l.Icon && <span className="h-5 w-5 mr-1">{l.Icon}</span>}
            {l.text}
          </S.NavLink>
        ),
      )}
    </ul>
  )
}

export type DropdownLink = {
  id: string
  href?: string
  text: string
}

export type Link = {
  id: string
  href?: string
  text: string
  Icon?: React.ReactNode
  dropdown?: boolean
  dropdownLinks?: React.ReactNode
}

export interface TopNavProps {
  links: Link[]
  defaultLink: string
}

export default TopNav
