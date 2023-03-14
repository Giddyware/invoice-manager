import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/FormItem";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import ItemList from "../../components/ItemList";
import { InvoiceContext } from "../../context/invoiceContext";

const EditInvoice = ({ invoice }) => {
  const [client, setClient] = useState({ ...invoice });

  console.log("clie", client);

  const id = invoice.id;

  const navigate = useNavigate();

  let paymentTermList = [
    {
      id: "1",
      day: "1",
      select: false,
    },
    {
      id: "2",
      day: "7",
      select: false,
    },
    {
      id: "3",
      day: "14",
      select: false,
    },
    {
      id: "4",
      day: "30",
      select: false,
    },
  ];

  function handleSubmit(event, name) {
    event.preventDefault();
    console.log("log", client);
  }

  const handleChange = (event) => {};

  return (
    <div className="flex flex-col bg-white-light lg:flex-row">
      <Header />

      <main className="px-[24px] h-full py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        {/* <div
          onClick={() => navigate(-1)}
          className="flex items-baseline hover:cursor-pointer w-fit"
        >
          <Icon id="arrow-left" />
          <h3 className="ml-[24px] font-bold text-[12px]">Go back</h3>
        </div> */}

        <h2 className="mt-[24px] font-bold text-[24px]">Edit #{id}</h2>

        <Form />
      </main>
    </div>
  );
};

export default EditInvoice;
