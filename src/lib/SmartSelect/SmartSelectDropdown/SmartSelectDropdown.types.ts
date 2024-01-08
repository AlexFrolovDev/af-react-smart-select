import { SmartSelectDataType } from "../SmartSelect.types";
import { SmartSelectOptionType } from "./SmartSelectOption/SmartSelectOption.types";

export interface SmartSelectDropdownProps {
  selectedValues: string[];
  isMultiselect: boolean;
  data: SmartSelectDataType;
  open: boolean;
  positionAutoDetect?: boolean;
  onChange: (value: string) => void;
}
export type SmartSelectDropdownType = {};
