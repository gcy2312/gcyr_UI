import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import * as S from "./Modal.styles";

const Modal = (props: ModalProps): JSX.Element => {
  const { open, setOpen, showCloseButton, id, onClose, scrollBody } = props;

  const iconBgColor =
    props.iconBg +
    " mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10";

  const handleClose = () => {
    setOpen(!open);
    onClose();
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" id={id} className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <S.CloseContainer
                    showCloseButton={showCloseButton}
                    className="absolute px-4 pt-4 top-0 right-0"
                    onClick={handleClose}
                  >
                    <XMarkIcon className="h-4 w-4 text-gray-400 hover:text-gray-500" />
                  </S.CloseContainer>
                  <div className="sm:flex sm:items-start">
                    {props.icon && (
                      <div className={iconBgColor}>
                        <span className="h-6 w-6" aria-hidden="true">
                          {props.icon}
                        </span>
                      </div>
                    )}

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {props.title}
                      <S.BodySection scrollBody={scrollBody} className="mt-2">
                        {props.body}
                      </S.BodySection>
                    </div>
                  </div>
                </div>
                {props.footer && (
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    {props.footer}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export interface ModalProps {
  id: string;
  open: boolean;
  setOpen: (state: boolean) => void;
  title: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
  showCloseButton: boolean;
  onClose: () => void;
  scrollBody: boolean;
  iconBg?: string;
  icon?: React.ReactNode;
}

Modal.defaultProps = {
  showCloseButton: true,
  onClose: () => {
    return;
  },
  scrollBody: false,
};

export default Modal;
