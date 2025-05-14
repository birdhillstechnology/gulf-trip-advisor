"use client";

import Input from "../Input/Input";

type InputFieldProps = {
  label: string;
  id: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  id,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
		<div className="mt-1.5">
			<label htmlFor={id} className="text-neutral-800 dark:text-neutral-200">
				{label}
			</label>

			<Input
				type={type}
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				className="mt-1"
			/>
		</div>
	)
};

export default InputField;
