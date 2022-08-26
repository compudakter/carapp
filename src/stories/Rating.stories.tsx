import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Rating } from "../components/ui/rating/Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Rating",
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingItem = Template.bind({});
RatingItem.args = {
  rating: 3.5,
  setRating: (rating: number) => console.log("rating", rating),
};
export const ReadonlyRatingItem = Template.bind({});
ReadonlyRatingItem.args = {
  rating: 3.5,
};
