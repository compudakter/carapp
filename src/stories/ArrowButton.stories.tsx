import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowButton } from "../components/ui/arrowbutton/ArrowButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ArrowButton",
  component: ArrowButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArrowButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArrowButton> = (args) => (
  <ArrowButton {...args} />
);

export const ArrowButtonPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ArrowButtonPrimary.args = {
  variant: "primary",
  children: "Резерв онлайн",
};
export const ArrowButtonDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ArrowButtonDark.args = {
  variant: "dark",
  children: "Резерв онлайн",
};
export const ArrowButtonLight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ArrowButtonLight.args = {
  variant: "light",
  children: "Резерв онлайн",
};
