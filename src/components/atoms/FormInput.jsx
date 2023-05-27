import classNames from "classnames";
import { useForm } from "react-hook-form";

const FormInput = ({ name, className, type, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <input
      {...register(`${name}`, {
        valueAsNumber: type === "number" || undefined,
      })}
      className={classNames(
        'body-100 peer w-full rounded-lg border border-brand-100 bg-brand-200 px-8 py-3 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500',
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
