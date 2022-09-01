import React from "react";
import '../App.scss'
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "../components/ui/badge/Badge";
 
 export default {
  title: "Example/Badge",
  component: Badge, 
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Badge>;

 const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgePrimary = Template.bind({}); 
BadgePrimary.args = {
  text:'10'
};
 