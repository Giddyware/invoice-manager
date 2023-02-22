import Empty from "./page/Empty/Empty";
import Home from "./page/Home";
import EditInvoice from "./page/EditInvoice";
import ViewInvoice from "./page/ViewInvoice/ViewInvoice";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/edit-invoice" element={<EditInvoice />} />
        <Route path="/view-invoice" element={<ViewInvoice />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
