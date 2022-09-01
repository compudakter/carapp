import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TrustCard } from "../components/trustcard/TrustCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TrustCard",
  component: TrustCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TrustCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TrustCard> = (args) => (
  <TrustCard {...args} />
);

export const TrustCardItem = Template.bind({});
TrustCardItem.args = {
  percent: 90,
  rating: 4.5,
  site: "Сайт отзовик",
  store: "Название автосалона",
};
