import Empty from "./page/Empty/Empty";
import Home from "./page/Home";
// import EditInvoice from "./page/EditInvoice";
import ViewInvoice from "./page/ViewInvoice/ViewInvoice";
import {
  createBrowserRouter,

  RouterProvider,

} from "react-router-dom";



import { InvoiceProvider } from "./context/invoiceContext";
import { Authentication } from "./components/auth";

function App() {
  // const { id } = useParams();

  // const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Home />
        // </ProtectedRoute>
      ),
    },
    {
      path: "view-invoice/:id",
      element: (
        // <ProtectedRoute>
        <ViewInvoice />
        // </ProtectedRoute>
      ),
    },
    {
      path: "empty",
      element: (
        // <ProtectedRoute>
        <Empty />
        // </ProtectedRoute>
      ),
    },
    {
      path: "signup",
      element: <Authentication />,
    },
  ]);

  return (
    <InvoiceProvider>
      <RouterProvider router={router} />
    </InvoiceProvider>
  );
}

export default App;

// const Root = () => {
//   let location = useLocation();

//   const background = location.state && location.state.background;

//   return (
//     <>
//       <Outlet />

//       {/* {background && (
//         <Routes>
//           <Route path="/" element={<SideModal />} />
//         </Routes>
//       )} */}
//     </>
//   );
// };
