import React from "react";
import { Meta } from "@storybook/react";
import EmptyState, { EmptyStateProps } from "./EmptyState";
import Button from "../Button/Button";
import {
  ArchiveBoxIcon,
  ArrowRightIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

export default {
  title: "Design/Empty State",
  component: EmptyState,
} as Meta;

export const EmptyStateExample = (args: EmptyStateProps) => {
  return (
    <EmptyState
      id={""}
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
      title={"Add your first test product"}
      body={
        "Products are what you sell to customers. They can be anything from physical goods to digital services or subscription plans"
      }
      actions={
        <Button
          id={""}
          onClick={() => alert("click")}
          text="Add a product"
          type="primary"
          Icon={<PlusIcon />}
        />
      }
    />
  );
};
