import classNames from "classnames";
import { useFormContext } from "react-hook-form";

const FormInput = ({ name, className, type, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      {...register(`${name}`, {
        valueAsNumber: type === "number" || undefined,
      })}
      className={classNames(
        'body-100 peer w-full rounded-lg border border-brand-100 bg-neutral-100 px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-neutral-100 dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500',
        className
      )}
      type={type}
      aria-invalid={errors?.[name] ? "true" : "false"}
      aria-errormessage={`errors-${name}`}
      {...rest}
    />
  );
};
export { FormInput };
