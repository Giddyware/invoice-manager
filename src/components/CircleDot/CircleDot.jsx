import classNames from "classnames";

const classes = {
  base: "w-2 h-2 rounded-full inline-block mt-2",
  status: {
    paid: "bg-success",
    pending: "bg-warning",
    draft: "bg-draft",
  },
};

const CircleDot = ({ status = "warning", children, ...props }) => {
  return (
    <span
      className={classNames(`${classes.base} ${classes.status[status]}`)}
      {...props}
    >
      {children}
    </span>
  );
};
export default CircleDot;
