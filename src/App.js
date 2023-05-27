import Empty from "./page/Empty/Empty";
import Home from "./page/Home";
// import EditInvoice from "./page/EditInvoice";
import ViewInvoice from "./page/ViewInvoice/ViewInvoice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { InvoiceProvider } from "./context/invoiceContext";
import { Authentication, SignUp } from "./components/auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },

    { path: "/signup", element: <SignUp /> },
    {
      path: "/empty",
      element: <Empty />,
    },
    {
      path: "/view-invoice/:id",
      element: <ViewInvoice />,
    },
  ]);

  return (
    <InvoiceProvider>
      <RouterProvider router={router} />
    </InvoiceProvider>
  );
}

export default App;
