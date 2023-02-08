import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Clients from "../../constants/data";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-light lg:flex-row">
      <Header />
      <main className="p-[24px] lg:flex-1">
        <Nav />
        <div className="mt-[32px] mb-[80px]">
          {Clients.map((client) => (
            <Card key={client.id} {...client} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Home;
