import React from "react";
import '../App.scss'
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CarCard } from "../components/carcard/CarCard";
 
 export default {
  title: "Example/CarCard",
  component: CarCard, 
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CarCard>;

 const Template: ComponentStory<typeof CarCard> = (args) => <CarCard {...args} />;

export const CarCardPrimary = Template.bind({}); 
CarCardPrimary.args = {
  title:"Skoda Octavia 1.6 MPI MT Active",
  benefit:300000,
  gifts:[
    "Оборудование",
    "КАСКО",
    "Комплект резины"
  ],
  price:1615000,
  credit:115000,
  carProps:{
    charge:5.3,
    consume:115,
    maxSpeed:189,
    time:10.3
  }
};
 