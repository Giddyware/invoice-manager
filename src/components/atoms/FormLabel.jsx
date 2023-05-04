import classNames from "classnames";

const FormLabel = ({ className, children, ...rest }: Props) => {
  return (
    <label className={classNames("body-100", className)} {...rest}>
      {children}
    </label>
  );
};

export { FormLabel };
