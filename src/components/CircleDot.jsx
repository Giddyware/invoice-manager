import classNames from "classnames";

const classes = {
  base: "w-2 h-2 rounded-full inline-block",
  status: {
    paid: "bg-accent-success",
    pending: "bg-accent-warning",
    draft: "bg-accent-draft",
  },
};

const CircleDot = ({ status = "light-warning", children, ...props }) => {
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
