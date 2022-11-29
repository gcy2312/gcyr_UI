import React, { Fragment } from 'react'
import * as S from './Toast.styles'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Button from '../Button/Button'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Toast = (props: ToastProps): JSX.Element => {
  const { id, open, setOpen, title, text, actions, Icon, avatar } = props

  const IconAvatar = () => {
    if (avatar === true) {
      return (
        <div className="h-12 w-12 overflow-hidden rounded-full flex-shrink-0">
          {Icon}
        </div>
      )
    } else if (!avatar && Icon) {
      return <span className="h-6 w-6 flex-shrink-0">{Icon}</span>
    } else return <></>
  }
  return (
    <div
      id={id}
      className="relative inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-4 sm:items-start"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={open}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto border border-gray-600/5 overflow-hidden">
            <div className="p-4 flex items-start">
              <IconAvatar />
              <div className="flex-col pt-0.5 ml-4">
                <p className="text-sm text-gray-600 font-medium">{title}</p>
                <p className="text-sm text-gray-400 mt-1">{text}</p>

                {actions && <div className="mt-4">{actions}</div>}
              </div>

              <div className="ml-4 absolute top-8 right-8 flex-shrink-0">
                <button
                  className="bg-white hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  <XMarkIcon className="h-5 w-5 text-gray-400 " />
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export interface ToastProps {
  id: string
  open: boolean
  setOpen: (state: boolean) => void
  title: string
  text: string
  actions?: React.ReactNode
  Icon?: React.ReactNode
  avatar?: boolean
}

Toast.defaultProps = {}

export default Toast
