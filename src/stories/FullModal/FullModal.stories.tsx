import React, { useState } from "react";
import { Meta } from "@storybook/react";
import FullModal, { FullModalProps } from "./FullModal";

export default {
  title: "Design/Full Page Modal",
  component: FullModal,
} as Meta;

export const FullPageModal = (args: FullModalProps) => {
  const [open, setOpen] = useState(true);
  const isFullWidth = window.innerWidth < 768 ? true : false;
  return (
    <FullModal
      open={open}
      setOpen={setOpen}
      id={""}
      fullWidth={isFullWidth}
      title={<p>Test</p>}
      actions={
        <>
          <button className="bg-[#625AFA] text-white flex cursor-pointer py-1 px-2 items-center align-middle font-medium text-sm rounded-md">
            Save Item
          </button>
        </>
      }
      body={
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      }
    />
  );
};

export const MobileFullPageModal = (args: FullModalProps) => {
  const [open, setOpen] = useState(true);
  const isFullWidth = true;
  return (
    <FullModal
      open={open}
      setOpen={setOpen}
      id={""}
      fullWidth={isFullWidth}
      title={<p>Test</p>}
      actions={
        <button className="bg-[#625AFA] text-white flex cursor-pointer py-1 px-2 items-center align-middle font-medium text-sm rounded-md">
          Save Item
        </button>
      }
      body={
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      }
    />
  );
};
