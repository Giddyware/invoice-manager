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
  useParams,
} from "react-router-dom";
import SideModal from "./components/SlideModal";
import { Auth } from "./components/auth";
import { createContext, useState } from "react";

import { InvoiceProvider } from "./context/invoiceContext";

// export const ClientsData = createContext();

// const initialState = {
//   todoList: [],
// };

// const actions = {
//   ADD_NEW_CLIENT: "ADD_NEW_CLIENT",
//   // REMOVE_NEW_CLIENT: "REMOVE_NEW_CLIENT",
// };

let loo =
  Math.random()
    .toString(36)
    .toUpperCase()
    .replace(/[0-9O]/g, "")
    .substring(1, 3) +
  (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

console.log(loo);

function App() {
  const { id } = useParams();

  const [user, setUser] = useState(null)

  const router = createBrowserRouter(
    // createRoutesFromElements(
    //   <Route path="/" element={<Root />}>
    //     {/* <Route index element={<Home />} /> */}

    //     <Route path="/view-invoice" element={<Home />}>
    //       <Route exact path=":id" element={<ViewInvoice />} />
    //     </Route>
    //     {/* <Route path="/edit-invoice" element={<EditInvoice />} /> */}
    //     <Route path="/test" element={<ViewInvoice />} />
    //     <Route path="/empty" element={<Empty />} />
    //     <Route path="/welcome" element={<Auth />} />
    //   </Route>
    // )

    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "view-invoice/:id",
        element: <ViewInvoice />,
      },
      {
        path: "empty",
        element: <Empty />,
      },
    ]
  );

  return (
    <InvoiceProvider>
      <RouterProvider router={router} />
    </InvoiceProvider>
  );
}

export default App;

const Root = () => {
  let location = useLocation();

  const background = location.state && location.state.background;

  return (
    <>
      <Outlet />

      {/* {background && (
        <Routes>
          <Route path="/" element={<SideModal />} />
        </Routes>
      )} */}
    </>
  );
};
