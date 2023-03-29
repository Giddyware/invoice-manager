import Header from "../../components/Header";
import Icon from "../../components/Icon";
import Nav from "../../components/Nav";

import EmptyIllustratation from "../../assets/illustration-empty.svg";

const Empty = () => {
  return (
    <div className="flex flex-col bg-brand-100 lg:flex-row">
      <Header />
      <main className="px-[24px] h-screen py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        <Nav />
        <div className="text-center">
          <div className="">
            <img
              className="mx-auto"
              src={EmptyIllustratation}
              alt="The page is empty"
            />
          </div>
          <h1 className="font-bold text-[20px] mb-5">There is nothing here</h1>
          <p className="text-gray-dark-61 text-xs font-medium max-w-[200px] mx-auto">
            Create an invoice by clicking the{" "}
            <span className="font-bold md:hidden">New</span>{" "}
            <span className="font-bold sm:hidden md:inline">New Invoice </span>
            button and get started
          </p>
        </div>
      </main>
    </div>
  );
};
export default Empty;
