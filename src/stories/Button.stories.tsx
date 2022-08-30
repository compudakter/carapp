import React from "react";
import '../App.scss'
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/ui/button/Button";
 
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Primary",
};
export const PrimaryMedium = Template.bind({}); 
PrimaryMedium.args = {
  size:'md',
  children: "Primary medium",
};
export const PrimarySmall = Template.bind({}); 
PrimarySmall.args = {
  size:'sm',
  children: "Primary small",
};

 