/* eslint-disable */
import SmartSelect from './SmartSelect';

export default {
  title: "SmartSelect",
};

export const Default = () => {


  return <div style={{width: '300px'}}><SmartSelect data={[]} /></div>
};

Default.story = {
  name: 'default',
};
