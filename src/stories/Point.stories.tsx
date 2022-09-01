import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Point } from "../components/point/Point";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Point",
  component: Point,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Point>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Point> = (args) => <Point {...args} />;

export const PrimaryPointItem = Template.bind({});
PrimaryPointItem.args = {
  title: "Страхование",
  label: "в подарок",
  type: "gift",
  variant: "primary",
};

export const DarkPointItem = Template.bind({});
DarkPointItem.args = {
  title: "Страхование",
  label: "в подарок",
  type: "gift",
  variant: "dark",
};
export const LightPointItem = Template.bind({});
LightPointItem.args = {
  title: "Страхование",
  label: "в подарок",
  type: "gift",
  variant: "light",
};
