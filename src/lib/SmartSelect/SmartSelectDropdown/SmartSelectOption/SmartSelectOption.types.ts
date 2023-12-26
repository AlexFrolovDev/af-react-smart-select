export type SmartSelectOptionType = {
  value: string;
  label: string;
};
export interface SmartSelectOptionProps {
  value: string;
  label: string;
  selected?: boolean;
  onOptionClick: (value: string) => void;
}
