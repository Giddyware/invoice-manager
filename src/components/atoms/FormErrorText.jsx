import classNames from "classnames";
import { useForm } from "react-hook-form";

const FormErrorText = ({
  id = "",
  message,
  className,
  children,
  ...rest
}: Props) => {
  const {
    formState: { errors },
  } = useForm();

  return (
    <span
      role="alert"
      id={`errors-${id}`}
      aria-live="assertive"
      className={classNames(
        "text-200 font-semibold leading-200 tracking-[-0.21px]",
        className
      )}
      {...rest}
    >
      {children || message || `${errors?.[id]?.message || ""}`}
    </span>
  );
};

export { FormErrorText };
