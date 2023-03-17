import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/FormItem";
import Header from "../../components/Header";
import Icon from "../../components/Icon";

const CreateInvoice = () => {
  const [client, setClient] = useState({
    clientName: "",
    description: "",
    paymentTerms: 0,
    clientEmail: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  });

  const [formErrors, setFormErrors] = useState({
    clientName: "",
    description: "",
    paymentTerms: 0,
    clientEmail: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    const errors = {
      clientName: "",
      description: "",
      paymentTerms: 0,
      clientEmail: "",
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
    };

    // Name validation
    if (client.clientName.trim() === "") {
      errors.clientName = "Please enter your name";
    }

    // // Age validation
    // if (client.age.trim() === '') {
    //   errors.age = 'Please enter your age';
    // } else if (isNaN(client.age)) {
    //   errors.age = 'Please enter a valid age';
    // } else if (client.age < 18) {
    //   errors.age = 'You must be at least 18 years old';
    // }

    // clientEmail validation
    if (client.clientEmail.trim() === "") {
      errors.clientEmail = "Please enter your Email";
    } else if (!/\S+@\S+\.\S+/.test(client.clientEmail)) {
      errors.clientEmail = "Please enter a valid Email";
    }

    // Password validation
    // if (client.password.trim() === "") {
    //   errors.password = "Please enter a password";
    // } else if (client.password.length < 8) {
    //   errors.password = "Password must be at least 8 characters long";
    // }

    // Confirm password validation
    // if (client.confirmPassword.trim() === '') {
    //   errors.confirmPassword = 'Please confirm your password';
    // } else if (client.password !== client.confirmPassword) {
    //   errors.confirmPassword = 'Passwords do not match';
    // }

    // Street validation
    if (client.senderAddress.street.trim() === "") {
      errors.senderAddress.street = "Please enter your sender's street";
    }

    // City validation
    if (client.senderAddress.city.trim() === "") {
      errors.senderAddress.city = "Please enter your sender's city";
    }

    // State validation
    if (client.senderAddress.country.trim() === "") {
      errors.senderAddress.country = "Please enter your country";
    }

    // ZIP validation

    // Validate ZIP format (5 digits or 5 digits + 4)
    const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    if (client.senderAddress.postCode.trim() === "") {
      errors.senderAddress.postCode = "Please enter your Post Code";
    } else if (!zipRegex.test(client.senderAddress.zip)) {
      errors.senderAddress.postCode = "Please enter a valid Post Code";
    }

    // Street validation
    if (client.clientAddress.street.trim() === "") {
      errors.clientAddress.street = "Please enter your sender's street";
    }

    // City validation
    if (client.clientAddress.city.trim() === "") {
      errors.clientAddress.city = "Please enter your sender's city";
    }

    // State validation
    if (client.clientAddress.country.trim() === "") {
      errors.clientAddress.country = "Please enter your country";
    }

    // ZIP validation

    // Validate ZIP format (5 digits or 5 digits + 4)
    // const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    if (client.clientAddress.postCode.trim() === "") {
      errors.clientAddress.postCode = "Please enter your Post Code";
    } else if (!zipRegex.test(client.clientAddress.zip)) {
      errors.clientAddress.postCode = "Please enter a valid Post Code";
    }

    // State validation
    if (client.description.trim() === "") {
      errors.description = "Please enter your description";
    }

    // Set the form errors
    setFormErrors(errors);

    // Submit the form if there are no errors
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      console.log(client);
      console.log("Form submitted!");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Check if the property is nested or not
    if (name.includes(".")) {
      const [parent, child] = name.split(".");

      setClient((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      setClient((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    // setClient((prevState) => {
    //   return { ...prevState, [event.target.name]: event.target.value };
    // });
    console.log(client, "chang");
  };

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

  // const handleInputError = (i)=>{

  // }

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

        <h2 className="mt-[24px] font-bold text-[24px]">New Invoice</h2>

        <form onSubmit={handleSubmit} className="text-gray-dark-63 font-[12px]">
          <h3 className="my-[24px] font-bold text-[12px] text-primary font">
            Bill From
          </h3>
          <Input
            id="streetAddress"
            name="senderAddress.street"
            label="Street Address"
            // placeholder="19 Union Terrace"
            type="text"
            value={client.senderAddress.street}
            onChange={handleChange}
            isError={!!formErrors.senderAddress.street}
          />

          <div className="flex justify-between my-[24px]">
            <Input
              id="city"
              name="senderAddress.city"
              label="City"
              // placeholder="London"
              type="text"
              value={client.senderAddress.city}
              onChange={handleChange}
              isError={!!formErrors.senderAddress.city}
            />
            <Input
              id="postCode"
              name="senderAddress.postCode"
              label="Post Code"
              // placeholder="E1 3EZ"
              type="text"
              value={client.senderAddress.postCode}
              onChange={handleChange}
              isError={!!formErrors.senderAddress.postCode}
            />

            <Input
              id="Country"
              name="senderAddress.country"
              label="Country"
              // placeholder="United Kingdom"
              type="text"
              value={client.senderAddress.country}
              onChange={handleChange}
              isError={!!formErrors.senderAddress.country}
            />
          </div>

          <h2 className="my-[24px] font-bold text-[12px] text-primary">
            Bill To
          </h2>

          <Input
            id="Client's Name"
            name="clientName"
            label="Client's Name"
            // placeholder="John Doe"
            type="text"
            defaultValue={client.clientName}
            onChange={handleChange}
            isError={!!formErrors.clientName}
            formError={formErrors.clientName}
          />

          <Input
            id="ClientEmail"
            name="clientEmail"
            label="Client’s Email"
            // placeholder="johndoe@example.com"
            type="text"
            value={client.clientEmail}
            onChange={handleChange}
            isError={!!formErrors.clientEmail}
            formError={formErrors.clientEmail}
          />

          <Input
            id="streetAddress2"
            name="clientAddress.street"
            label="Street Address"
            // placeholder="84 Church Way"
            type="text"
            value={client.clientAddress.street}
            onChange={handleChange}
            isError={!!formErrors.clientAddress.street}
            formError={formErrors.clientAddress.street}
          />

          <div className="flex justify-between mb-[24px] gap-x-6">
            <Input
              id="city2"
              name="clientAddress.city"
              label="City"
              // placeholder="Bradford"
              type="text"
              value={client.clientAddress.city}
              onChange={handleChange}
              isError={!!formErrors.clientAddress.city}
            />

            <Input
              id="PostCode2"
              name="clientAddress.postCode"
              label="PostCode"
              // placeholder="BD1 9PB"
              type="text"
              value={client.clientAddress.postCode}
              onChange={handleChange}
              isError={!!formErrors.clientAddress.postCode}
            />
            <Input
              id="Country"
              name="clientAddress.country"
              label="Country"
              // placeholder="BD1 9PB"
              type="text"
              value={client.clientAddress.country}
              onChange={handleChange}
              isError={!!formErrors.clientAddress.country}
            />
          </div>

          <div className="flex justify-between mb-[24px]">
            <div className="relative flex-1 max-w-sm">
              <label className="block mb-2" htmlFor="Invoice Date">
                Invoice Date
              </label>

              <input
                type="date"
                name="createdAt"
                className="bg-gray-50 shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:ring-opacity-50 block w-full pl-10 p-2.5"
                placeholder="Select date"
                value={client.createdAt}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1 ml-6">
              <label
                htmlFor="paymentTerms"
                className="block mb-2 text-sm text-gray-900"
              >
                Payment Terms
              </label>
              <select
                id="paymentTerms"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              >
                {paymentTermList.map(({ id, day, select }) => (
                  <option
                    key={id}
                    className="hover:text-primary"
                    // value={client.paymentTerms}
                    // onChange={(e) => setPaymentTerms(e.target.value)}
                  >
                    Net {day} Day
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Input
            id="Project Description"
            name="description"
            label="Project Description"
            // placeholder="Graphic Design"
            value={client.description}
            onChange={handleChange}
            isError={!!formErrors.description}
          />

          <h2 className="my-[24px] font-bold text-[18px] text-gray-dark-61">
            Item List
          </h2>

          {/* <ItemList previtems={items} /> */}

          <div className="w-full p-4 font-bold text-center rounded-3xl text-gray-dark-63 bg-gray hover:cursor-pointer">
            + Add New Item
          </div>
          <div className="my-8 text-xs text-urgent">
            <span className="block">- All fields must be added</span>
            <span className="block">- An item must be added</span>
            {formErrors.clientName && (
              <span className="block">- {formErrors.clientName}</span>
            )}
          </div>
          <div className="flex justify-end font-medium">
            <button className="px-[24px] py-[16px] md:mr-[8px] bg-draft-light rounded-full capitalize text-gray-dark-63 hover:bg-gray">
              cancel
            </button>
            <button
              type="submit"
              className="px-[24px] py-[16px] rounded-full bg-primary capitalize hover:bg-primary-light text-[white]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default CreateInvoice;
