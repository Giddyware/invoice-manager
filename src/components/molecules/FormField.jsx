import { FormControl, FormErrorText, FormInput, FormLabel } from "../atoms";

const FormField = ({
  name,
  type,
  placeholder,
  label,
  defaultValue,
  autoComplete,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
}: Props) => {
  return (
    <FormControl className={className}>
      <FormInput
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClassName}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
      />

      <div className='flex items-center justify-between text-brand-400 peer-aria-[invalid="true"]:!text-accent-200 dark:text-brand-300'>
        <FormLabel htmlFor={name} className={labelClassName} children={label} />
        <FormErrorText id={name} className={errorClassName} />
      </div>
    </FormControl>
  );
};

export { FormField };
