import classNames from "classnames";
import CircleDot from "../CircleDot/CircleDot";

const classes = {
  base: "flex font-bold p-2 rounded-[8px] md:mt-0",
  status: {
    paid: "bg-success-light text-success",
    pending: "bg-warning-light text-warning",
    draft: "bg-draft-light text-draft",
  },
};

const Receipt = ({ status = "", children, ...props }) => {
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
