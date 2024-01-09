export interface SelectedValuesBoxProps {
  values: string[];
  placeholder?: string;
  multiselect?: boolean;
  singleLine?: boolean;
  enableScroll?: boolean;
  showDeselectAllButton?: boolean;
  onRemove?: (indecies: string[]) => void;
}
export type SelectedValuesBoxType = {};
