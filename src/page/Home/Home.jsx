import { Auth } from "../../components/auth";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Clients from "../../constants/data";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-light lg:flex-row">
      <Header />
      <main className="px-[24px] py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        {/* <Nav />
        <div className="mt-[32px] mb-[80px]">
          {Clients.map((client) => (
            <Card key={client.id} {...client} />
          ))}
        </div> */}
        <Auth />
      </main>
    </div>
  );
};
export default Home;
