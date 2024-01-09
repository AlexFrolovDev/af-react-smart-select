/* eslint-disable */
import type { Meta, StoryObj } from "@storybook/react";
import SmartSelect from "./SmartSelect";

const data = [
  {
    id: 1,
    label: "Group 1",
    items: new Array(20).fill(null).map((_, idx) => ({
      label: `Option 1_${idx + 1}`,
      value: `option-1_${idx + 1}`,
    })),
  },
  {
    id: 2,
    label: "Group 2",
    items: new Array(20).fill(null).map((_, idx) => ({
      label: `Option 2_${idx + 1}`,
      value: `option-2_${idx + 1}`,
    })),
  },
];

const meta: Meta<typeof SmartSelect> = {
  component: SmartSelect,
  title: "SmartSelect",
  parameters: {
    layout: 'padded'
  },
  tags: []
};

export default meta;

type Story = StoryObj<typeof SmartSelect>;

export const Default: Story = {
  args: {
    data: data,
    multiSelect: false,
    enableSearch: false,
    singleLineSelectedValues: true,
    singleLineSelectedValuesScroll: false,
    showDeselectAllButton: false,
    disabled: false,
    placeholder: 'Select value(s)'
  }
};

/* 
export const Default = () => {
  const data = [
    {
      id: 1,
      label: "Group 1",
      items: new Array(20).fill(null).map((_, idx) => ({
        label: `Option 1_${idx + 1}`,
        value: `option-1_${idx + 1}`,
      })),
    },
    {
      id: 2,
      label: "Group 2",
      items: new Array(20).fill(null).map((_, idx) => ({
        label: `Option 2_${idx + 1}`,
        value: `option-2_${idx + 1}`,
      })),
    },
  ];

  return <SmartSelect data={data} />;
};

Default.story = {
  name: "efault",
}; */
