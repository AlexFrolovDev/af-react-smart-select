import { SmartSelectOptionType } from "./SmartSelectOption/SmartSelectOption.types";

export interface SmartSelectDropdownProps {
  selectedValues: string[];
  isMultiselect: boolean;
  options: SmartSelectOptionType[];
  open: boolean;
  onChange: (value: string) => void;
}
export type SmartSelectDropdownType = {};
