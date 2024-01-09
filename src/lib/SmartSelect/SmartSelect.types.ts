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

export type SmartSelectDataType = DataGroup[] | SmartSelectDataItem[];

export interface SmartSelectProps {
  disabled?: boolean;
  placeholder?: string;
  multiSelect?: boolean;
  singleLineSelectedValues?: boolean;
  singleLineSelectedValuesScroll?: boolean;
  showDeselectAllButton?: boolean;
  /* async?: boolean;
  isLoadingData?: boolean;
  maxOptionsToShow?: number;
  loadOnScrollToEnd?: boolean; */
  data: SmartSelectDataType;
  enableSearch?: boolean;
  /* loadDataCb?: () => void; */
  onChange?: (values: string[]) => void;
  onOpen?: () => void;
  onClose?: () => void;
}
