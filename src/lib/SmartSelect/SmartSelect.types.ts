export type SmartSelectDataItem = {
    label: string;
    value: string | number;
}

export type SmartSelectDataType = SmartSelectDataItem[]

export interface SmartSelectProps {
  disabled?: boolean;
  placeholder?: string;
  multiSelect?: boolean;
  searchable?: boolean;
  data: SmartSelectDataType;
}
