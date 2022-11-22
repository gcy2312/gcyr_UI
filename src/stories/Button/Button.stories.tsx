import React, { useState } from "react";
import { Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Design/Button",
  component: Button,
} as Meta;

export const ButtonPrimary = (args: ButtonProps) => {
  return (
    <Button
      id={""}
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      error={false}
      text="button"
    />
  );
};

export const ButtonSecondary = (args: ButtonProps) => {
  return (
    <Button
      id={""}
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
      error={false}
      text="button"
      type="secondary"
    />
  );
};
