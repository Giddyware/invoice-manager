import Icon from "../Icon/Icon";

const Nav = () => {
  return (
    <div className="flex items-baseline justify-between mt-1">
      <div>
        <h1 className="font-bold text-[20px]">Invoices</h1>
        <p className="text-[gray] text-[12px]">
          <span className="mr-1 md:hidden">7 invoices</span>
          <span className="hidden mr-1 md:inline">There are 7 total invoices</span>
        </p>
      </div>
      <div className="flex items-baseline">
        <h2 className="font-bold mr-[18px]">
          Filter <span className="hidden pl-1 md:inline">by status</span>
        </h2>
        <div>
          <Icon id="arrow-down" size={18} stroke={4} color="" />
        </div>

        <button
          aria-label="Activate dark mode"
          className="text-offWhite rounded-full items-center justify-between flex bg-primary ml-[18px] p-[10px]"
          type="submit"
        >
          <span className="pb-1 pl-1 pr-1 mr-3 rounded-full bg-offWhite">
            <Icon
              id="plus-icon"
              color={"hsl(252deg, 94%, 67%)"}
              size=""
              strokeWidth={3}
            />
          </span>
          <p className="text-sm font-[500] pr-[8px]">
            New
            <span className="hidden pl-1 md:inline">Invoice</span>{" "}
          </p>
        </button>
      </div>
    </div>
  );
};
export default Nav;
