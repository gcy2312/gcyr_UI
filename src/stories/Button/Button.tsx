import React from "react";

import * as S from "./Button.styles";

const Button = (props: ButtonProps): JSX.Element => {
  const {
    onClick,
    type,
    error,
    text,
    Icon,
    isLoading,
    loadingText,
    disabled,
    id,
  } = props;

  const ButtonIcon = () => {
    if (isLoading)
      return (
        <span className="h-5 w-5 text-gray-400 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="animate-spin"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      );

    if (Icon)
      return (
        <span className="h-5 w-5 text-gray-400 transition-all">{Icon}</span>
      );

    return <></>;
  };

  const buttonText = isLoading ? loadingText : text;

  const buttonTypes = {
    primary: S.BasicButton,
    secondary: S.SecondaryButton,
    icon: S.BasicButton,
    error: S.ErrorButton,
  };

  const ButtonComponent = error ? S.ErrorButton : buttonTypes[type];

  return (
    <ButtonComponent
      disabled={disabled || error}
      id={id}
      onClick={onClick}
      type="button"
      isLoading={isLoading}
      iconOnly={props.iconOnly}
    >
      <ButtonIcon />
      {text && <span>{buttonText}</span>}
    </ButtonComponent>
  );
};

export interface ButtonProps {
  id: string;
  text?: string;
  Icon?: React.ReactNode;
  onClick: () => React.MouseEventHandler<HTMLLIElement> | void;
  type: "primary" | "secondary" | "icon" | "error";
  error: boolean;
  isLoading?: boolean;
  loadingText?: string;
  iconOnly?: boolean;
  disabled: boolean;
}

Button.defaultProps = {
  type: "primary",
  error: false,
  disabled: false,
  isLoading: false,
  iconOnly: false,
};

export default Button;
