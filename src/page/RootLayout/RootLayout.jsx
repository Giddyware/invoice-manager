import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const RootLayout = () => {
  return (
    <div className="w-[max-width-wrapper-m] h-full">
      <Header />

      <main className="px-[24px] py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
