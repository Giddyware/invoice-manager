import classNames from "classnames";

const FormControl = ({ as, className, children, ...rest }) => {
  return (
    <div
      className={classNames("flex flex-col-reverse gap-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
export { FormControl };
