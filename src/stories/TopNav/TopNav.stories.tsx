import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import TopNav, { Link, TopNavProps } from './TopNav'
import { getEventListeners } from 'events'
import EmptyState from '../EmptyState/EmptyState'
import {
  ArchiveBoxIcon,
  ArrowRightIcon,
  Cog8ToothIcon,
  PlusIcon,
} from '@heroicons/react/24/solid'
import Button from '../Button/Button'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Navigation/Top Navigation',
  component: TopNav,
} as Meta

export const TopNavExample = (args: TopNavProps) => {
  const links: Link[] = [
    { id: 'profileTab', text: 'Profile' },
    { id: 'accountTab', text: 'Account' },
  ]
  return <TopNav defaultTab={'Profile'} links={links} />
}

export const TopNavDropdownExample = (args: TopNavProps) => {
  const links: Link[] = [
    { id: 'profileTab', text: 'Profile' },
    { id: 'accountTab', text: 'Account' },
    {
      id: 'optionsTab',
      text: 'Options',
      dropdown: true,
      dropdownLinks: [
        { id: 'account', text: 'Account Settings' },
        { id: 'test', text: 'Support' },
      ],
    },
  ]
  return <TopNav defaultTab={'Profile'} links={links} />
}
