import { SmartSelectDataType } from "../SmartSelect.types";

export interface SmartSelectDropdownProps {
  selectedValues: string[];
  data: SmartSelectDataType;
  open: boolean;
  positionAutoDetect?: boolean;
  enableSearch?: boolean;
  onChange: (value: string) => void;
}
export type SmartSelectDropdownType = {};
