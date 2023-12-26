export type SmartSelectDataItem = {
  label: string;
  value: string | number;
};

export type SmartSelectDataType = SmartSelectDataItem[];

export interface SmartSelectProps {
  disabled?: boolean;
  placeholder?: string;
  multiSelect?: boolean;
  searchable?: boolean;
  async?: boolean;
  isLoadingData?: boolean;
  maxOptionsToShow?: number;
  loadOnScrollToEnd?: boolean;
  data: SmartSelectDataType;
  loadDataCb?: () => void;
  onChange?: (value: SmartSelectDataType | SmartSelectDataType[]) => void;
  onOpen?: () => void;
  onClose?: () => void;
}
