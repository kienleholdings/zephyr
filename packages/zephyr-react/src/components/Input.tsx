import React from 'react';
import classNames from 'classnames';
import _noop from 'lodash/noop';

interface Props {
  autoComplete?: string;
  className?: string;
  errorMessage?: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  onValidityChange?: (valid: boolean) => void;
  placeholder?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  validator?: (value: string) => boolean;
}

const Input: React.FC<Props> = ({
  autoComplete,
  className,
  errorMessage,
  label,
  name,
  onChange,
  onValidityChange = _noop,
  placeholder,
  type,
  validator,
}) => {
  const isValid = validator || ((): boolean => true);
  if (!errorMessage && validator) {
    // Warn the developer if they specify a validator but no error message, despite including a
    // fallback
    // eslint-disable-next-line no-console
    console.warn(
      'Zephyr Warning: You have specified a validator but no error message. This may result in a bad user experience'
    );
  }
  const [input, setInput] = React.useState({
    touched: false,
    valid: false,
    value: '',
  });
  return (
    <label className="block mb-32" htmlFor={name}>
      <div className="font-body leading-body pb-8 text-body text-primary-normal">{label}</div>
      <input
        autoComplete={autoComplete}
        className={classNames(
          'border border-ash-normal bg-steam-normal h-56 placeholder-ash-dark px-24 py-16 rounded-partial shadow-1 w-full',
          {
            'border-danger-normal': !input.valid && input.touched,
            'text-danger-normal': !input.valid && input.touched,
          },
          className
        )}
        id={name}
        name={name}
        onBlur={(): void => setInput({ ...input, touched: true })}
        onChange={(e): void => {
          setInput({
            ...input,
            valid: isValid(e.currentTarget.value),
            value: e.currentTarget.value,
          });
          onChange(e.currentTarget.value);
          onValidityChange(isValid(e.currentTarget.value));
        }}
        placeholder={placeholder}
        type={type}
      />
      {!input.valid && input.touched && (
        <div className="font-body leading-body pt-8 text-body text-danger-normal">
          {errorMessage}
        </div>
      )}
    </label>
  );
};

export default Input;
