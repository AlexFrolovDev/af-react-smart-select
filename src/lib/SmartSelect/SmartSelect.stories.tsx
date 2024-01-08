/* eslint-disable */
import SmartSelect from './SmartSelect';

export default {
  title: "SmartSelect",
};

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
  ]

  return <div style={{width: '300px', marginTop: '300px'}}><SmartSelect data={data} /></div>
};

Default.story = {
  name: 'default',
};
