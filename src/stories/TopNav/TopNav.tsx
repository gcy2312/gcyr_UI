import { array } from 'prop-types'
import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import * as S from './TopNav.styles'

const TopNav = (props: TopNavProps): JSX.Element => {
  const { links, handleClick, defaultTab } = props

  const [active, setActive] = useState(defaultTab)

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
                Options
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-4 w-4"
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
              <Menu.Items className="absolute left-0 z-10 mt-1 w-56 origin-top-left rounded-lg bg-transparent shadow-md border ring-0 border-opacity-10 focus:outline-none">
                {l.dropdownLinks?.map((d, i) => (
                  <Menu.Item>
                    <a
                      href={d.href}
                      id={d.id}
                      onClick={() => {
                        handleClick && handleClick(d.text)
                      }}
                      className="block cursor-pointer px-4 py-2 text-sm bg-white  hover:bg-gray-200"
                    >
                      {d.text}
                    </a>
                  </Menu.Item>
                ))}
              </Menu.Items>
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
              handleClick && handleClick(l.text)
            }}
            defaultTab={defaultTab}
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
  dropdownLinks?: DropdownLink[]
}

export interface TopNavProps {
  links: Link[]
  handleClick?: (text: string) => React.MouseEventHandler<HTMLLIElement> | void
  defaultTab: string
}

export default TopNav
