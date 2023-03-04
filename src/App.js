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
  useNavigation,
  useLocation,
  Routes,
} from "react-router-dom";
import SideModal from "./components/SlideModal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/view-invoice" element={<ViewInvoice />} />
        <Route path="/edit-invoice" element={<EditInvoice />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  let location = useLocation();

  const background = location.state && location.state.background;

  // console.log("location state", location.state.background);

  return (
    <>
      <Outlet />

      {background && (
        <Routes>
          <Route path="/" element={<SideModal />} />
        </Routes>
      )}
    </>
  );
};
