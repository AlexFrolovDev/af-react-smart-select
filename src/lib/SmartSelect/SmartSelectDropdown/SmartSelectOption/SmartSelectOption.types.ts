export type SmartSelectOptionType = {
  value: string;
  label: string;
  disabled?: boolean;
};
export interface SmartSelectOptionProps {
  value: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onOptionClick: (value: string) => void;
}
