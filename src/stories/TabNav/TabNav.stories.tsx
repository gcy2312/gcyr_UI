import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import TabNav, { Link, TabNavProps } from './TabNav'
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
  title: 'Navigation/Tab Navigation',
  component: TabNav,
} as Meta

export const TabNavExample = (args: TabNavProps) => {
  const links: Link[] = [
    { id: 'profileTab', text: 'Profile' },
    { id: 'accountTab', text: 'Account' },
  ]
  return <TabNav defaultTab={'Profile'} links={links} />
}

export const TabIconExample = (args: TabNavProps) => {
  const links: Link[] = [
    { id: 'profileTab', text: 'Profile', Icon: <UserCircleIcon /> },
    { id: 'accountTab', text: 'Account', Icon: <Cog8ToothIcon /> },
  ]
  return <TabNav defaultTab={'Profile'} links={links} />
}

export const TabConditionalExample = (args: TabNavProps) => {
  const links: Link[] = [
    { id: 'availableTab', text: 'Available' },
    { id: 'achivedTab', text: 'Archived' },
  ]

  const [page, setPage] = useState('Available')
  const handleClick = (t: string) => {
    setPage(t)
  }
  return (
    <>
      <TabNav
        defaultTab={'Available'}
        links={links}
        handleClick={(t) => handleClick(t)}
      />
      <div className="py-4"></div>
      {page === 'Available' && (
        <EmptyState
          id={''}
          Icon={<ArchiveBoxIcon />}
          link={
            <a
              href="http://google.com"
              className="flex items-center align-baseline text-[#625afa] font-medium text-sm"
            >
              Learn more
              <ArrowRightIcon className="ml-1 h-5 w-5" />
            </a>
          }
          title={'Add your first test product'}
          body={
            'Products are what you sell to customers. They can be anything from physical goods to digital services or subscription plans'
          }
          actions={
            <Button
              id={''}
              onClick={() => alert('click')}
              text="Add a product"
              type="primary"
              Icon={<PlusIcon />}
            />
          }
        />
      )}
      {page === 'Archived' && (
        <EmptyState
          id={''}
          Icon={<ArchiveBoxIcon />}
          title={'No test products found for applied filters'}
          body={
            'You can try changing your filters or switching to live mode to expand your results. Otherwise, you can create a product.'
          }
          actions={
            <Button
              id={''}
              onClick={() => alert('click')}
              text="Add a product"
              type="primary"
              Icon={<PlusIcon />}
            />
          }
        />
      )}
    </>
  )
}
