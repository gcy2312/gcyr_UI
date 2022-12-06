import React from 'react'
import { Meta } from '@storybook/react'
import Link, { LinkProps } from './Link'
import { FolderArrowDownIcon } from '@heroicons/react/20/solid'

export default {
  title: 'Navigation/Link',
  component: Link,
} as Meta

export const LinkExample = (args: LinkProps) => {
  return (
    <Link
      label={'Learn more'}
      id={''}
      href={''}
      type={'default'}
      arrow={true}
    />
  )
}

export const IconExample = (args: LinkProps) => {
  return (
    <Link
      label={'Product List'}
      id={''}
      href={''}
      type={'icon'}
      arrow={false}
      icon={<FolderArrowDownIcon />}
    />
  )
}

export const ButtonExample = (args: LinkProps) => {
  return (
    <Link
      label={'Activate payments'}
      id={''}
      href={''}
      type={'button'}
      arrow={true}
    />
  )
}
