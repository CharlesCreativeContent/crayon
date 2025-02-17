import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../Button";
import { Calendar } from "../../Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../Popover";

const meta: Meta<typeof Popover> = {
  title: "Components/DatePickerV2",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const CalendarPopover: Story = {
  render: (args) => (
    <Popover modal>
      <PopoverTrigger asChild>
        <Button>Pick a date</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar mode="single" autoFocus />
      </PopoverContent>
    </Popover>
  ),
};
