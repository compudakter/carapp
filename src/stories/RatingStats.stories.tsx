import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RatingStats } from "../components/ratingstats/RatingStats";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/RatingStats",
  component: RatingStats,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RatingStats>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RatingStats> = (args) => (
  <RatingStats {...args} />
);

export const RatingItem = Template.bind({});
RatingItem.args = {
  percent: 90,
  rating: 4.5,
  size: "sm",
};
export const RatingItemLarge = Template.bind({});
RatingItemLarge.args = {
  percent: 90,
  rating: 4.5,
  size: "lg",
};
