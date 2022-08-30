import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowBtnGroup } from "../components/ui/arrowbutton/ArrowBtnGroup";
import { ArrowButton } from "../components/ui/arrowbutton/ArrowButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ArrowBtnBroup",
  component: ArrowBtnGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArrowBtnGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArrowBtnGroup> = (args) => (
  <ArrowBtnGroup {...args} />
);

export const ArrowBtnGroupItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ArrowBtnGroupItem.args = {
  children: [
    <ArrowButton variant="primary" children={"Резерв онлайн"} />,
    <ArrowButton variant="light" children={"Купить"} />,
    <ArrowButton variant="primary" children={"Подробнее"} />,
  ],
};
