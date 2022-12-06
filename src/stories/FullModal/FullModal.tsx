import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import * as S from './FullModal.styles'
import { XMarkIcon } from '@heroicons/react/24/solid'

const FullModal = (props: FullModalProps): JSX.Element => {
  const { open, setOpen, id, title } = props
  const isMobile = window.innerWidth < 768 ? true : false

  return (
    <Transition.Root show={open} as={'div'}>
      <Dialog
        as="div"
        id={id}
        static
        className="fixed z-40 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="fixed top-0 min-w-full w-full h-screen max-w-7xl overflow-y-auto ">
              <div className="relative bg-white shadow min-h-screen">
                <div className="flex justify-between p-4 border-b">
                  <div className="inline-flex items-center align-middle">
                    <div className="inline-flex ml-auto mr-0.5 ">
                      <button
                        className="bg-transparent rounded-md text-gray-500 hover:text-gray-400 focus:outline-none mt-2.5 mr-1.5"
                        type="button"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="ml-1.5 mr-0.5 border-l-[2px] border-gray-300 h-4"></div>

                    <span className="text-base font-medium align-middle text-gray-600 pl-4">
                      {title}
                    </span>
                  </div>
                  {!isMobile && (
                    <div className="inline-flex align-middle space-x-4 pr-3">
                      {props.actions}
                    </div>
                  )}
                </div>

                <S.BodyContainer
                  className="w-5/12 m-auto space-y-6 py-6 px-6"
                  fullWidth={props.fullWidth}
                >
                  {props.body}
                </S.BodyContainer>
                {isMobile && (
                  <div className="flex justify-end align-middle items-center p-4 border-t">
                    <div className="inline-flex space-x-4 pr-3">
                      {props.actions}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export interface FullModalProps {
  id: string
  open: boolean
  setOpen: (state: boolean) => void
  title: React.ReactNode
  body: React.ReactNode
  actions?: React.ReactNode
  fullWidth: boolean
}

FullModal.defaultProps = {
  onClose: () => {
    return
  },
  fullWidth: false,
}

export default FullModal
