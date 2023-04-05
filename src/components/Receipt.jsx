import classNames from "classnames";
import CircleDot from "./CircleDot";

const classes = {
  base: "flex items-center justify-center w-[104px] font-bold p-2 rounded-150 md:mt-0",
  status: {
    paid: "bg-light-success text-accent-success",
    pending: "bg-light-warning text-accent-warning",
    draft: "bg-light-draft text-accent-draft",
  },
};

const Receipt = ({ status = "pending", className, children, ...props }) => {
  return (
    <div
      className={classNames(`${classes.base} 
        ${classes.status[status]}
        ${className}`)}
      {...props}
    >
      <CircleDot status={status} />
      {children}
    </div>
  );
};
export default Receipt;
