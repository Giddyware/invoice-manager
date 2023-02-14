import Empty from "./page/Empty/Empty";
import Home from "./page/Home";
import EditInvoice from "./page/EditInvoice";
import ViewInvoice from "./page/ViewInvoice/ViewInvoice";

function App() {
  return (
    <div className="w-[max-width-wrapper-m] h-full">
      {/* <Home /> */}
      {/* <Empty /> */}
      {/* <EditInvoice /> */}
      <ViewInvoice />
    </div>
  );
}

export default App;
