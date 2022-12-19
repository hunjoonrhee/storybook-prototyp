import Button, { ButtonProps } from '../components/Button'
import {Meta, Story} from "@storybook/react";

export default{
  title:"Button",
  component:Button,
  argTypes: {clickHandler: {action: "clicked!!"}},
}as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}/>

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Red Button",
  backgroundColor: "red",
  size:"md",
  color:"white",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "Blue Button",
  backgroundColor: "blue",
  size:"lg",
  color:"white",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: "Small Button",
  backgroundColor: "grey",
  size:"sm",
  color:"black",
};

export const LongLabelButton = Template.bind({});
LongLabelButton.args = {
  label: "Loooooooooooooong contents",
  backgroundColor: "white",
  size:"md",
  color:"red",
};