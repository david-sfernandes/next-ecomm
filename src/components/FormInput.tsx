export default function FormInput({
  label,
  name,
  required = true,
  type,
  formKey,
  onInput,
  value
}: FormInputProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="formLabel"
      >
        {label}{required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        className="formInput"
        onInput={(e) => onInput(e, formKey)}
        defaultValue={value}
      />
    </div>
  );
}


