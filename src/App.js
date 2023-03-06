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
import { createContext } from "react";
import Clients from "./constants/data";

export const ClientsData = createContext();

const initialState = {
  todoList: [],
};

const actions = {
  ADD_NEW_CLIENT: "ADD_NEW_CLIENT",
  // REMOVE_NEW_CLIENT: "REMOVE_NEW_CLIENT",
};

let loo =
  Math.random()
    .toString(36)
    .toUpperCase()
    .replace(/[0-9O]/g, "")
    .substring(1, 3) +
  (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

console.log(loo);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NEW_CLIENT:
      return {
        clientList: [
          ...state.clientList,
          {
            id: loo,
            createdAt: new Date().valueOf(),
          },
        ],
      };

    case actions.TOGGLE_COMPLETED: {
      const updatedTodoList = state.todoList.map((todoItem) =>
        todoItem.id === action.todoItemId
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
      return { todoList: updatedTodoList };
    }
    default:
      return state;
  }
};

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/view-invoice" element={<ViewInvoice />} />
        <Route path="/edit-invoice" element={<EditInvoice />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/welcome" element={<Auth />} />
      </Route>
    )
  );

  return (
    <ClientsData.Provider value={Clients}>
      <RouterProvider router={router} />;
    </ClientsData.Provider>
  );
}

export default App;

const Root = () => {
  let location = useLocation();

  const background = location.state && location.state.background;

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
