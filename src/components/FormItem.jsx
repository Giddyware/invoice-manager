function Input({ label, type, isError, formError, ...props }) {
  console.log("item", isError);
  return (
    <div className="mb-2 mt-6">
      <div className={`flex justify-between`}>
        <label
          htmlFor={label.toLowerCase()}
          className={`mb-2 text-gray-dark-63  ${isError && "text-urgent"}`}
        >
          {label}
        </label>
        {isError && <p className="text-urgent text-xs">{formError}</p>}
      </div>
      <input
        {...props}
        className={`block w-full h-12 text-black font-bold text-sm px-5 py-2 border border-solid rounded-md shadow-sm border-gray focus:border-primary focus-visible:border-primary lg:w-full ${
          isError && "border-urgent"
        }`}
      />
    </div>
  );
}

export default Input;
