import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GroupCard } from "../components/groupcard/GroupCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/GroupCard",
  component: GroupCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GroupCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GroupCard> = (args) => <GroupCard {...args} />;

export const GroupCardItem = Template.bind({});
GroupCardItem.args = {
  title:'Семейные автомобили',
  img:'group1.png'
};
