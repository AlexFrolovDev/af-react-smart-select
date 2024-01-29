# AF-REACT-SMART-SELECT

Lightweight Select component built for React applications. [Example](https://codesandbox.io/p/sandbox/af-react-smart-select-mr7wpz).


**Features:**

* Typescript support
* Search option
* Grouping for option items
* Single or Multiple Select option with delete icon
* Implemented using [styled-components](https://www.npmjs.com/package/styled-components)

**Props and Types**

---

Data types, accepted by Component:

```
export type DataGroup = {
  id: string | number;
  label?: string;
  items: SmartSelectDataItem[];
  value?: never;
};

export type SmartSelectDataItem = {
  label: string;
  value: string | number;
  id?: never;
  items?: never;
};
```


| Name                            | Type                                 | Default           |
| --------------------------------- | -------------------------------------- | ------------------- |
| data                            | DataGroup[] OR SmartSelectDataItem[] | []                |
| enableSearch?                   | boolean                              | false             |
| placeholder?                    | string                               | "Select value(s)" |
| multiSelect?                    | boolean                              | false             |
| singleLineSelectedValues?       | boolean                              | true              |
| singleLineSelectedValuesScroll? | boolean                              | true              |
| showDeselectAllButton?          | boolean                              | false             |
| disabled?                       | boolean                              | false             |
| onChange?                       | (values: string[]) => void           | () => void        |
| onOpen?                         | () => void                           | () => void        |
| onClose?                        | () => void                           | () => void        |

---

**Example:**

```
import SmartSelect from "./SmartSelect";

export const Component= () => {
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
```
