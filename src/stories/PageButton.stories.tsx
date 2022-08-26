import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageButton } from "../components/ui/pagebutton/PageButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/PageButton",
  component: PageButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageButton> = (args) => (
  <PageButton {...args} />
);

export const NextPageButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NextPageButton.args = {
  type: "next",
  onClick: (e) => console.log("next"),
};
export const PrevPageButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrevPageButton.args = {
  type: "prev",
  onClick: (e) => console.log("prev"),
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
