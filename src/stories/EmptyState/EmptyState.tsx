import React from "react";

import * as S from "./EmptyState.styles";

const EmptyState = (props: EmptyStateProps): JSX.Element => {
  const { title, body, Icon, link, actions } = props;
  const isMobile = window.innerWidth < 768 ? true : false;

  return (
    <S.Container
      isMobile={isMobile}
      className="flex flex-col justify-left w-5/12 m-auto space-y-1 py-6 px-4"
    >
      <span className="w-12 h-12 bg-gray-100 text-gray-500 rounded-md p-2.5">
        {Icon}
      </span>
      <p className="pt-4 text-xl font-bold text-gray-700">{title}</p>
      <p className="text-sm text-gray-400">{body}</p>

      {link && link}

      <div className="pt-4">{actions}</div>
    </S.Container>
  );
};

export interface EmptyStateProps {
  id: string;
  Icon: React.ReactNode;
  title: string;
  body: string;
  link?: React.ReactNode;
  actions?: React.ReactNode;
}

EmptyState.defaultProps = {};

export default EmptyState;
