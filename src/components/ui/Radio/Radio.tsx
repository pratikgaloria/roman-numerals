import * as React from 'react';
import { Label, Checkmark, RadioInput } from './Radio.styles';

interface RadioProps {
  checked?: boolean;
  label?: React.ReactNode;
  name: string;
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  checked,
  label,
  name,
  onChange,
  value,
  disabled,
}) => (
  <Label disabled={disabled}>
    {label && <span>{label}</span>}
    <RadioInput
      checked={checked}
      name={name}
      onChange={() => onChange(value)}
      value={value}
      disabled={disabled}
    />
    <Checkmark checked={checked} />
  </Label>
);

export default Radio;
