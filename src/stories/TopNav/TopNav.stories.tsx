import { Meta } from '@storybook/react'
import { Menu } from '@headlessui/react'
import TopNav, { Link, TopNavProps } from './TopNav'

export default {
  title: 'Navigation/Top Navigation',
  component: TopNav,
} as Meta

export const TopNavExample = (args: TopNavProps) => {
  const links: Link[] = [
    { id: 'profileTab', text: 'Profile' },
    { id: 'accountTab', text: 'Account' },
  ]
  return <TopNav defaultLink={'Profile'} links={links} />
}

export const TopNavDropdownExample = (args: TopNavProps) => {
  const dLinks: Link[] = [
    { id: 'account', text: 'Account Settings' },
    { id: 'test', text: 'Support' },
    { id: 'signOut', text: 'Sign Out' },
  ]
  const links: Link[] = [
    { id: 'profileTab', text: 'Profile' },
    { id: 'accountTab', text: 'Account' },
    {
      id: 'optionsTab',
      text: 'Options',
      dropdown: true,

      dropdownLinks: (
        <Menu.Items className="absolute left-0 z-10 mt-1 w-56 origin-top-left rounded-lg bg-transparent shadow-md border ring-0 border-opacity-10 focus:outline-none">
          {dLinks?.map((d, i) => (
            <Menu.Item>
              <a
                href={d.href}
                key={i}
                id={d.id}
                className="block cursor-pointer px-4 py-2 text-sm bg-white  hover:bg-gray-200"
              >
                {d.text}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      ),
    },
  ]
  return <TopNav defaultLink={'Profile'} links={links} />
}

export const TopNavCompleteExample = (args: TopNavProps) => {
  const dLinks: Link[] = [
    { id: 'settings', text: 'Account Settings' },
    { id: 'support', text: 'Support' },
    { id: 'signOut', text: 'Sign Out' },
  ]
  const links: Link[] = [
    { id: 'home', text: 'Home' },
    { id: 'payments', text: 'Payments' },
    { id: 'balances', text: 'Balances' },
    { id: 'customers', text: 'Customers' },
    { id: 'products', text: 'Products' },
    { id: 'reports', text: 'Reports' },
    { id: 'connect', text: 'Connect' },
    {
      id: 'more',
      text: 'More',
      dropdown: true,

      dropdownLinks: (
        <Menu.Items className="absolute left-0 z-10 mt-1 w-56 origin-top-left rounded-lg bg-transparent shadow-md border ring-0 border-opacity-10 focus:outline-none">
          {dLinks?.map((d, i) => (
            <Menu.Item>
              <a
                href={d.href}
                key={i}
                id={d.id}
                className="block cursor-pointer px-4 py-2 text-sm bg-white  hover:bg-gray-200"
              >
                {d.text}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      ),
    },
  ]
  return <TopNav defaultLink={'Home'} links={links} />
}
