import { DialogContent } from "@reach/dialog";
import { useState } from "react";
import CheckboxSelect from "../CheckboxSelect/CheckboxSelect";

const CheckedModal = ({ close, showDialog }) => {
  const [checked, setChecked] = useState(true);

  const options = [
    { label: "Draft", value: "draft" },
    { label: "Pending", value: "pending" },
    { label: "Paid", value: "paid" },
  ];

  return (
    <div className="absolute w-[192px] drop-shadow-lg">
      <DialogContent
        style={{
          width: "192px",
          borderRadius: "8px",
          paddingBottom: "24px",
          paddingLeft: "24px",
          paddingTop: "1px",
          position: "relative",
          left: "-46px",
          top: "-34px",
        }}
      >
        {/* <ul
          className="overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownPickStatus"
        >
          <li>
            <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-11"
                type="checkbox"
                value=""
                class="w-4 h-4 text-primary-light bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary-light dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="checkbox-item-11"
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Draft
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-11"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-light focus:ring-primary dark:focus:ring-primary-light dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="checkbox-item-11"
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Pending
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <input
                id="checkbox-item-11"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-light focus:ring-primary dark:focus:ring-primary-light dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="checkbox-item-11"
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >
                Paid
              </label>
            </div>
          </li>
        </ul> */}

        <div className="container mx-auto mt-8 mb-4">
          <CheckboxSelect options={options} />
        </div>
      </DialogContent>
    </div>
  );
};
export default CheckedModal;
