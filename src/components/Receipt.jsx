import classNames from "classnames";
import CircleDot from "./CircleDot";

const classes = {
  base: "flex items-center justify-center w-[104px] font-bold p-2 rounded-[8px] md:mt-0",
  status: {
    paid: "bg-success-light text-success",
    pending: "bg-warning-light text-warning",
    draft: "bg-draft-light text-draft",
  },
};

const Receipt = ({ status = "pending", children, ...props }) => {
  return (
    <div
      className={classNames(
        `${classes.base} 
        ${classes.status[status]}`
      )}
      {...props}
    >
      <CircleDot status={status} />
      {children}
    </div>
  );
};
export default Receipt;
