import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReviewCard } from "../components/reviewcard/ReviewCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ReviewCard",
  component: ReviewCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ReviewCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <ReviewCard {...args} />
);

export const ReviewCardItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReviewCardItem.args = {
  name: "Сергей Васильев",
  text: `«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, 
  добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, 
  чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA.
  Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, 
  добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, 
  чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA.
  `,
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
