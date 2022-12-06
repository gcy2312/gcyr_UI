import { useState } from 'react'
import { Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import {
  DocumentArrowUpIcon,
  PlusIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Design/Button',
  component: Button,
} as Meta

export const ButtonPrimary = (args: ButtonProps) => {
  return (
    <Button
      id={''}
      onClick={() => alert('click')}
      error={false}
      text="button"
      Icon={<PlusIcon />}
    />
  )
}

export const ButtonSecondary = (args: ButtonProps) => {
  return (
    <Button
      id={''}
      onClick={() => alert('click')}
      error={false}
      text="button"
      type="secondary"
    />
  )
}

export const ButtonError = (args: ButtonProps) => {
  return (
    <Button
      id={''}
      onClick={() => alert('click')}
      error={true}
      Icon={<ExclamationCircleIcon />}
      text="Error"
      type="error"
    />
  )
}

export const ButtonIcon = (args: ButtonProps) => {
  return (
    <Button
      id={''}
      onClick={() => alert('click')}
      error={false}
      text=""
      type="secondary"
      iconOnly={true}
      Icon={<DocumentArrowUpIcon />}
    />
  )
}

export const LoadingButton = (args: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  return (
    <Button
      id={''}
      onClick={() => handleClick()}
      error={false}
      text="Click Me"
      loadingText="Please wait"
      isLoading={isLoading}
      type="primary"
      Icon={<XCircleIcon />}
    />
  )
}
