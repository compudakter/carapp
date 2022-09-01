import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckBox } from "../components/ui/checkbox/CheckBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CheckBox",
  component: CheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CheckBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const CheckBoxItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CheckBoxItem.args = {
  label: "Покупка в трейд-ин",
};
